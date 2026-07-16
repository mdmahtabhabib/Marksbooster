# MarksBooster Database

Supabase (PostgreSQL). Original design (students + purchases) is dated
13 July 2026 and its rationale is in
[`MarksBooster-Database-Design.pdf`](../../MarksBooster-Database-Design.pdf)
at the repo root. A `products` table was added after that PDF was written —
see below, it's documented here but not in the PDF.

## Tables

### `students`
One row per signed-up student. `id` is the same UUID as the Supabase Auth
user (`auth.users.id`), so a student row can only exist for a real account.
A trigger auto-fills `id`, `full_name`, and `email` from `auth.users` on
signup — the frontend never inserts into this table directly.

| column | type | notes |
|---|---|---|
| id | uuid | PK, FK -> auth.users.id, cascade delete |
| full_name | text | not null |
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
| course | text | e.g. `'class8'`, `'class9'`, `'class10'` |
| amount_paid | numeric | price frozen at purchase time |
| payment_status | text | one of pending/completed/failed/refunded, default completed |
| purchased_at | timestamptz | default now() |

Table rule: unique on `(student_id, course)` — a student can't buy the same
course twice.

**Note:** `purchases.course` is still a plain text column, not yet a
foreign key to `products.product_code`. Confirm this before relying on it —
if you've since wired them together, update this doc and
`03_purchases.sql` to add `references products (product_code)`.

## How they connect

```
purchases.student_id -> students.id -> auth.users.id
purchases.course      -> (not yet linked to) products.product_code
```

Creation order matters: `students` and `products` have no dependency on
each other and can be created in either order, but both must exist before
`purchases`. That's why the schema files are numbered `01_students.sql`,
`02_products.sql`, `03_purchases.sql`.

## Security

Row Level Security (RLS) is enabled on all three tables, since the
Supabase anon key is public in the frontend:
- Students can `select` only their own row/purchases.
- Anyone can `select` active products.
- There is no `insert` policy on `purchases` — the admin adds rows manually
  via Supabase's Table Editor after confirming payment.

## Deferred for later (by design, not oversight)

- `expires_at` on `purchases` — course access is lifetime for now
  (note: `products.access_until` now covers a similar need at the product
  level — worth deciding which one is the source of truth)
- `role` on `students` — needed once there's an admin dashboard
- `payment_ref` — payment gateway reference fields
- linking `purchases.course` to `products.product_code` as a real FK

Each of these is a non-breaking, additive change when the time comes —
see `migrations/` for how to apply them.
