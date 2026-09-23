# Short Notes Generation Prompt (paste this into any AI)

Fill in the five placeholders at the top, attach the chapter source, and send.

---

CHAPTER_TITLE: {{e.g. Reproduction: How Life Continues}}
CHAPTER_SLUG:  {{e.g. reproduction-how-life-continues}}
CLASS:         {{one of: class6 class7 class8 class9 class10 class11 class12 neet}}
SUBJECT:       {{one of: physics chemistry biology english socialscience maths zoology botany}}
CHAPTER_NUMBER:{{e.g. 11}}

You will generate ONE SQL file that inserts short notes for the chapter above
into a Supabase (PostgreSQL) database. Output ONLY SQL. No explanation, no
markdown fences, no commentary.

============================================================
PART 1 — OUTPUT CONTRACT (MANDATORY — BREAKING ANY OF THIS MAKES THE NOTES UNUSABLE)
============================================================

The output is rendered by a fixed React component. It reads only the keys
listed below. Any other key is silently ignored, and a wrong data type crashes
the page. Follow this exactly.

------------------------------------------------------------
1.1 DATABASE SCHEMA (do not invent table or column names)
------------------------------------------------------------

Table `chapters`:
  slug     text primary key
  class    text  -- must be one of the CLASS values listed above
  subject  text  -- must be one of the SUBJECT values listed above
  title    text

Table `short_notes`:
  chapter_slug  text primary key, references chapters(slug)
  kicker        text
  subtitle      text
  footer        text
  sections      jsonb  -- must be a non-empty JSON ARRAY

The table name is `short_notes` with an UNDERSCORE. Never `short-notes`.
A hyphen is a syntax error in PostgreSQL.

`short_notes` has NO title column. The chapter title lives on `chapters.title`
and is read from there. Do not add a title field to short_notes.

------------------------------------------------------------
1.2 REQUIRED SQL SHAPE
------------------------------------------------------------

Emit exactly these two statements, in this order (the chapters row must exist
first or the foreign key rejects the notes insert):

insert into chapters (slug, class, subject, title)
values ('{{CHAPTER_SLUG}}', '{{CLASS}}', '{{SUBJECT}}', '{{CHAPTER_TITLE}}')
on conflict (slug) do nothing;

insert into short_notes (chapter_slug, kicker, subtitle, footer, sections)
values (
  '{{CHAPTER_SLUG}}',
  'NCERT · Class {{N}} Science · Ch {{CHAPTER_NUMBER}}',
  'Complete revision · point-wise notes',
  'End of Chapter {{CHAPTER_NUMBER}} · {{short topic}} notes',
  $json$
  [ ...the sections array... ]
  $json$
)
on conflict (chapter_slug) do update
set kicker   = excluded.kicker,
    subtitle = excluded.subtitle,
    footer   = excluded.footer,
    sections = excluded.sections;

Rules:
- Wrap the JSON in dollar quoting `$json$ ... $json$`. This is what lets
  apostrophes (don't, plant's) appear inside the notes without escaping.
- The literal text `$json$` must never appear inside the notes content.
- The file must be safe to re-run. Use the `on conflict` clauses above.

------------------------------------------------------------
1.3 THE sections JSON — EXACT ALLOWED SHAPE
------------------------------------------------------------

sections = an ARRAY of section objects. It must not be empty.

SECTION object:
  "title"  (string, REQUIRED) — the heading bar text
  "type"   (string, OPTIONAL) — only the value "sub" is understood; it renders
                                a smaller sub-heading. Omit it otherwise.
  "items"  (ARRAY, REQUIRED)  — must exist and must not be empty. A section
                                without "items" crashes the page.

ITEM object — these six keys are the ONLY keys that render:
  "title"       (string, REQUIRED) — card heading
  "subtitle"    (string, optional) — small italic text after the title
  "description" (string, optional) — one short paragraph
  "bullets"     (ARRAY OF STRINGS, optional)
  "table"       (OBJECT, optional)
  "note"        (ARRAY OF STRINGS, optional)

CRITICAL TYPE RULES — these are the mistakes that break the page:
  - "bullets" must be an array of PLAIN STRINGS. Never objects, never nested
    arrays, never a single string.
  - "note" must be an ARRAY OF STRINGS, even when there is only one line.
    Write "note": ["..."] — NEVER "note": "...".
    The renderer calls note.map(), so a string throws
    "item.note.map is not a function" and the whole page goes blank.
  - "table" must be exactly: { "headers": [strings], "rows": [[strings], ...] }
    Every row must have the SAME number of cells as there are headers.
    Every cell must be a string. Use "\n" inside a cell for a line break.
  - Do NOT invent any other key (no "image", "formula", "points", "content",
    "example", "heading"). Anything else is dropped silently and the
    information is lost.
  - Every item needs a "title". A card with no title renders headerless.

VALID MINIMAL EXAMPLE — copy this structure:

[
  {
    "title": "Introduction",
    "items": [
      {
        "title": "Reproduction",
        "bullets": [
          "Reproduction is the process by which living beings produce new individuals of their own kind.",
          "It ensures continuity of life on Earth."
        ]
      },
      {
        "title": "Asexual vs Sexual",
        "table": {
          "headers": ["Asexual", "Sexual"],
          "rows": [
            ["One parent.", "Two parents."],
            ["Offspring are identical.", "Offspring show variation."]
          ]
        },
        "note": [
          "Variation is the main advantage of sexual reproduction."
        ]
      }
    ]
  }
]

------------------------------------------------------------
1.4 JSON VALIDITY
------------------------------------------------------------

- Strict JSON: double quotes only, no trailing commas, no comments, no
  single-quoted keys or values.
- Curly/smart quotes are fine INSIDE a string value, never as the delimiters.
- Unicode such as – — · ° → × is fine and encouraged for readability.
- Before finishing, mentally parse the whole array. An unbalanced bracket
  means the entire insert fails.

============================================================
PART 2 — CONTENT RULE: COMPLETE BUT CONCISE
============================================================

The notes must contain EVERY IMPORTANT INFORMATION from the provided source,
but must NOT become unnecessarily long.

The goal is:
  every important fact + concept + example + definition + experiment +
  application + comparison + exam point
BUT:
  short + simple + easy to understand + easy to revise

HOW TO ACHIEVE THIS

Do NOT copy textbook paragraphs.
Convert textbook explanations into short, meaningful bullets.
Each bullet should preferably communicate ONE main idea.
Combine closely related information when doing so removes no important detail.

Remove:
- repeated explanations
- unnecessary storytelling
- unnecessary introductory wording
- decorative language
- information repeated in multiple places

Do NOT remove:
- important facts, scientific terms, definitions, examples
- functions, characteristics, classifications
- conditions, causes, effects
- experimental observations and conclusions
- applications
- important numerical values, names and dates
- exam-relevant details

IDEAL BULLET STYLE

Instead of copying:
  "Meristematic cells are small, thin-walled cells with dense cytoplasm, a
  prominent nucleus and little or no intercellular space. They generally lack
  large vacuoles because they are actively dividing."

Write:
  {
    "title": "Features of Meristematic Cells",
    "bullets": [
      "Cells are small and have thin walls.",
      "They have dense cytoplasm and a prominent nucleus.",
      "There is little or no space between the cells.",
      "Large vacuoles are generally absent.",
      "These features support continuous cell division."
    ]
  }

LENGTH RULE

- Simple concept → 2–4 useful bullets is enough.
- Important concept → as many bullets as the information needs.
- Complex topic → split into MULTIPLE cards (items), or multiple sections,
  rather than one extremely long card.
- Comparisons → use a "table".
- Definitions → short and precise.
- Experiments → important procedure, observation and conclusion, no padding.

NO INFORMATION LOSS RULE

"Short" does NOT mean "remove information". Shorten the LANGUAGE, not the
CONTENT.

Too short: "Xylem transports water."
Better:
  "Xylem transports water and minerals from the roots to other parts of the plant."
  "Xylem contains tracheids, vessels, xylem parenchyma and xylem fibres."
  "Xylem also provides support to the plant."

TARGET

The final notes should feel like "complete textbook coverage in compressed,
simple, student-friendly form" — not a thin summary, and not a copy of the
textbook.

STRUCTURE GUIDANCE

- Follow the source's own order and numbering, e.g. a section titled
  "11.2 · Sexual Reproduction" keeps the student oriented.
- Add a final section "Quick Revision · One-Page Core" with a single card of
  one-line takeaways for the whole chapter.
- If the source has end-of-chapter questions, add a section with answer points
  grouped into cards of 4–5 questions each.

============================================================
PART 3 — FINAL CHECK BEFORE OUTPUT
============================================================

TECHNICAL (any failure here makes the notes unusable):
[ ] Table is `short_notes` with an underscore.
[ ] The `chapters` insert comes BEFORE the `short_notes` insert.
[ ] class and subject are values from the allowed lists.
[ ] CHAPTER_SLUG is identical in both inserts.
[ ] sections is a non-empty ARRAY.
[ ] Every section has a non-empty "items" array.
[ ] Every item has a "title".
[ ] EVERY "note" is an ARRAY of strings — search the output for `"note": "`
    and fix every hit.
[ ] Every "bullets" is an array of plain strings.
[ ] Every table row has the same cell count as its headers.
[ ] No keys other than title, subtitle, description, bullets, table, note.
[ ] The JSON parses: brackets balanced, no trailing commas.
[ ] `$json$` does not appear inside the content.
[ ] Output is SQL only — no markdown fences, no prose.

CONTENT:
[ ] All important concepts, definitions, examples covered.
[ ] Important experiments/activities included with observation + conclusion.
[ ] Important applications and comparisons included.
[ ] Facts needed for end-of-chapter questions covered.
[ ] Repetition removed; bullets short and easy to understand.
[ ] Scientific information still complete.
[ ] A student can revise the whole chapter quickly from these notes.
