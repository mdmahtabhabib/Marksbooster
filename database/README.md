# MarksBooster Database

Supabase (PostgreSQL). Original design (students + purchases) is dated
13 July 2026 and its rationale is in
[`MarksBooster-Database-Design.pdf`](../../MarksBooster-Database-Design.pdf)
at the repo root. Both the `products` table and the extra `purchases`
columns (product FK, payment-gateway fields, expiry) were added after that
PDF was written — this README, not the PDF, is the current source of truth.

## Tables

### `students`
One row per signed-up student. `id` is the same UUID as the Supabase Auth
user (`auth.users.id`), so a student row can only exist for a real account.
A trigger auto-fills `id`, `full_name`, and `email` from `auth.users` on
signup — the frontend never inserts into this table directly.

| column | type | notes |
|---|---|---|
| id | uuid | PK, FK -> auth.users.id, cascade delete |
| full_name | text | nullable — null if signup metadata has no `full_name` |
| email | text | not null |
| phone | text | optional, collected later on a profile page |
| created_at | timestamptz | default now() |

### `products`
Catalog of purchasable courses — replaces what the original PDF called
"a separate courses catalog table, deferred for later." `product_code` is
a slug (e.g. `class9-premium`), not a surrogate id, so it can be used
directly as a human-readable key elsewhere.

| column | type | notes |
|---|---|---|
| product_code | text | PK, must match `^[a-z0-9]+(-[a-z0-9]+)*$` |
| name | text | not null |
| description | text | optional |
| price | numeric(10,2) | not null, >= 0 |
| currency | text | default 'INR', only 'INR' allowed for now |
| unlocks_class | text | not null — which class dashboard this product opens; same allowed values as `chapters.class` |
| access_until | timestamptz | not null — when access to this product expires |
| is_active | boolean | default true — inactive products are hidden from browsing |
| created_at | timestamptz | default now() |

RLS: anyone (`anon` or `authenticated`) can `select` products where
`is_active = true` — needed for a public pricing/course-listing page.

### `purchases`
One row per buying event. One student can have many purchases
(one-to-many).

| column | type | notes |
|---|---|---|
| id | bigint | PK, auto-numbered |
| student_id | uuid | FK -> students.id, cascade delete |
| product_code | text | FK -> products.product_code, on update cascade |
| amount_paid | numeric(10,2) | price frozen at purchase time, >= 0 |
| currency | text | default 'INR', only 'INR' allowed for now |
| payment_status | text | one of pending/completed/failed/refunded, default 'pending' |
| gateway_order_id | text | payment-gateway order id, optional |
| payment_reference | text | payment-gateway reference, unique when present |
| created_at | timestamptz | default now() — when the row was created |
| purchased_at | timestamptz | set when payment completes (no default) |
| expires_at | timestamptz | optional per-purchase access expiry |

Indexes: on `student_id`, `product_code`, and `payment_status`.

Table rules:
- unique on `(student_id, product_code)` **only where
  `payment_status = 'completed'`** — a student can't hold two completed
  purchases of the same product, but a failed/pending attempt can be retried.
- unique on `gateway_order_id` where present.

### `chapters`
Catalog of content chapters, independent of the students/purchases group.
`slug` is a human-readable key (e.g. `class9-physics-motion`) used directly
in URLs and referenced by `flashcards`.

| column | type | notes |
|---|---|---|
| slug | text | PK, human-readable key |
| class | text | not null, one of `class6`..`class12` or `neet` |
| subject | text | not null, one of physics/chemistry/biology/english/socialscience/maths/zoology/botany |
| title | text | not null |

RLS: any `authenticated` user can `select` every chapter.

### `flashcards`
Q&A cards belonging to a chapter (one-to-many). `position` orders the cards
within a chapter.

| column | type | notes |
|---|---|---|
| id | bigint | PK, auto-numbered |
| chapter_slug | text | FK -> chapters.slug, cascade delete |
| question | text | not null |
| answer | text | not null |
| position | int | not null, default 0, >= 0 |

Table rule: unique on `(chapter_slug, position)` — no two cards in a chapter
share a slot. Index `idx_flashcards_chapter` on `chapter_slug`.

RLS: a student can `select` only the flashcards of chapters whose `class`
they have a completed purchase for, via `has_class_access(chapters.class)`.
The original open "any authenticated user" policy was replaced by
`migrations/001_flashcards_purchase_policy.sql`.

## How they connect

```
purchases.student_id    -> students.id -> auth.users.id
purchases.product_code  -> products.product_code
flashcards.chapter_slug -> chapters.slug
```

The content tables (`chapters`, `flashcards`) are a separate group with no
link to students/purchases — they're just the catalog of study material.

Creation order matters: `students` and `products` have no dependency on
each other and can be created in either order, but both must exist before
`purchases`. Likewise `chapters` must exist before `flashcards`. That's why
the schema files are numbered `01_students.sql`, `02_products.sql`,
`03_purchases.sql`, `04_chapters.sql`, `05_flashcards.sql`.

## Seeding content

**A chapter row must exist before any of its flashcards.**
`flashcards.chapter_slug` is a foreign key to `chapters.slug`, so inserting
cards for a slug that isn't in `chapters` yet fails with:

```
ERROR: insert or update on table "flashcards" violates foreign key constraint
DETAIL: Key (chapter_slug)=(...) is not present in table "chapters".
```

A multi-row `INSERT ... VALUES (...), (...), ...` is a single statement, so
this is all-or-nothing — every card is rejected, nothing is half-written.
Add the parent row and re-run.

Order for a new chapter:

```sql
-- 1. the chapter
insert into chapters (slug, class, subject, title)
values ('tissues-in-action', 'class9', 'biology', 'Tissues in Action');

-- 2. then its cards
insert into flashcards (chapter_slug, question, answer, position)
values ('tissues-in-action', '...', '...', 1),
       ('tissues-in-action', '...', '...', 2);
```

Things that are easy to get wrong:

- **`slug` must match the frontend exactly.** The nav lists live in code
  (`src/data/<class>/chapters/*.js`) and are *not* generated from this
  table — the two are kept in sync by hand. A mismatch gives a working
  link that loads an empty page.
- **`class` gates access, not just the FK.** Flashcard reads go through
  `has_class_access(chapters.class)` (see `migrations/001`), so a chapter
  filed under the wrong class shows an empty deck to students who
  legitimately bought it.
- **`position` is scoped per chapter,** because the unique constraint is on
  the pair `(chapter_slug, position)`. Every chapter's deck starts at 1 —
  don't continue numbering from the previous chapter's last card.
- **`subject` and `class` are `check`-constrained** to the lists in
  `schema/04_chapters.sql`. Anything else is rejected.
- Escape apostrophes in question/answer text by doubling them
  (`nature''s`), since the values are single-quoted string literals.

## Security

Row Level Security (RLS) is enabled on all five tables, since the
Supabase anon key is public in the frontend:
- Students can `select` only their own row/purchases.
- Anyone can `select` active products.
- Any logged-in student can `select` every chapter (titles only, no content).
- Flashcards are readable only for classes the student has purchased.
- There is no `insert` policy on `purchases` — the admin adds rows manually
  via Supabase's Table Editor after confirming payment.
- Likewise there's no `insert`/`update` policy on `chapters` or `flashcards`
  — content is added by the admin via the Table Editor.

## Deferred for later (by design, not oversight)

- `role` on `students` — needed once there's an admin dashboard

This is a non-breaking, additive change when the time comes — see
`migrations/` for how to apply it.

(Already done, previously listed here: `expires_at` on `purchases`,
payment-gateway reference fields, and the `purchases -> products` FK.)

## Open decisions

- **Expiry source of truth:** both `products.access_until` (per product) and
  `purchases.expires_at` (per purchase) now exist. Decide which one governs
  access before relying on either.
- **Content ↔ commerce link:** resolved via `products.unlocks_class` —
  a completed purchase joined to its product tells the app which class
  the student may open. The guard compares it to the URL's `:classId`.
