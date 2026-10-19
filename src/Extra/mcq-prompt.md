# Concept Check MCQ Prompt (paste into any AI)

1. Copy everything below the `---` line, fill in the 4 values, attach the
   chapter PDF and send.
2. The AI first sends only the FACT LIST. Check it against the book: every
   heading and box should be there, down to the last section. If something
   is missing, tell it. Then reply `next`.
3. Each `next` brings one SQL part. Copy it with the code block's copy button
   and run it in the Supabase SQL editor. Keep replying `next` until a part
   ends with `-- DONE`.
4. Skim the answers: the database rejects broken rows, but not a wrong fact.

CHAPTER_SLUG must match `src/data/<class>/chapters/*.js` exactly.

| Supabase error mentions | meaning |
|---|---|
| `mcqs_check` | an answer is not exactly one of its options |
| `mcqs_options_check` or `invalid input syntax for type json` | broken options |
| `mcqs_chapter_slug_position_key` | these positions already exist. Before you store student answers, run `delete from mcqs where chapter_slug = '…';` and run all parts again |
| `dollar-quoted` or `syntax error` | a broken `$$` near the line named |

The "Failing row" line shows which question. A failed part saves nothing,
so fix it and run that part again.

---

CHAPTER_TITLE: {{e.g. Cell: The Building Block of Life}}
CHAPTER_SLUG:  {{e.g. cell-the-building-block-of-life}}
CLASS:         {{class6 class7 class8 class9 class10 class11 class12 neet}}
SUBJECT:       {{physics chemistry biology english socialscience maths zoology botany}}

Write Concept Check MCQs for the attached textbook chapter, as SQL for a
Supabase (PostgreSQL) table. Work in several replies:
- Reply 1: only the FACT LIST (section 1). No questions yet.
- Each time the user says "next": questions for the next part of the fact
  list (section 2), as SQL (section 3).
Every reply is ONE ```sql code block and nothing else.
- No readable chapter attached → the block holds only:
  -- ERROR: no readable chapter attached
- The PDF has several chapters → use only CHAPTER_TITLE.
- Level: NEET if CLASS is neet, otherwise a CBSE / state-board school exam for
  that class.

## 1. REPLY 1: FACT LIST

Go through the whole chapter in order. Write every testable fact as its own
numbered comment line (F1, F2, F3 …), ONE fact per line.
- Write every heading of the chapter as a comment, in order, including box
  titles such as "Meet a Scientist" or "Threads of Curiosity", with its facts
  under it. Every heading must appear, down to the last one.
- Facts include definitions, terms, characteristics, functions, structures,
  processes and their steps, types, differences, causes and effects, every
  example the book gives, laws, formulas, units, values, names, dates, full
  forms (DNA = …), word meanings the book gives (pro = primitive), what each
  activity shows, and applications.
- Also list what each figure and table shows (labelled parts, comparisons,
  sizes, effects), every named stain or chemical and what it is used for,
  and the concept each end-of-chapter exercise tests.
- Skip ONLY: stories and conversations, activity steps, "think about it" /
  discussion prompts, figure numbers, and repeated text. Name each skipped
  item under SKIPPED.
- A full chapter usually has well over 50 facts. If your list is around 30
  lines, you listed topics, not facts. Split them.
- Then go through the chapter once more, section by section, and add
  anything missing. Check the last pages as carefully as the first.
- Use only facts and terms from this book. Where it differs from other
  sources, follow the book.

Format (example only):

```sql
-- FACT LIST
-- 2.1 How to study cells
--   F1 Total magnification = eyepiece magnification × objective magnification
-- 2.2 Plasma membrane
--   F2 The plasma membrane is selectively permeable
--   F3 It is made of lipids and proteins
--   F4 It is present in all cells
-- 2.3 Cell organelles
--   F5 Ribosomes make proteins
--   F6 Lysosomes digest worn-out cell parts
--   F7 Chloroplasts carry out photosynthesis
--   F8 The nucleus controls the cell's activities
-- Meet a Scientist: Camillo Golgi
--   F9 Camillo Golgi first observed the Golgi apparatus in 1898
-- SKIPPED
--   Opening story about a visit to a laboratory
-- Reply "next" for the questions.
```

## 2. QUESTION REPLIES

Each "next" covers the next part of the fact list: about 60 facts, ending at
the end of a heading. Cover every fact of the part, then stop. There is no
target number of questions.

Coverage:
- Before each question, write a comment naming the facts it tests:
  -- Q7: F21, F22
- A fact counts only if a student cannot answer the question without knowing
  it. A fact that appears only in an explanation or a wrong option does not
  count.
- Never test the same fact twice.
- A one-answer question (one correct option, including situation and
  numerical questions) names AT MOST 2 facts. To test more facts in one
  question, use one of these:
  - Numbered statements (3 facts): 3 statements, each on its own line, then
    "Which of these statements are correct?" Options exactly "1 and 2 only",
    "2 and 3 only", "1 and 3 only", "1, 2 and 3", with keep_order true. The
    correct answers follow this cycle across the whole chapter: 1st such
    question "1 and 2 only", 2nd "2 and 3 only", 3rd "1 and 3 only",
    4th "1, 2 and 3", then start again. Write the statements to fit.
  - NOT (3 facts): "Which of the following is NOT …?" 3 true options and
    1 false one.
  - Match (4 facts): Column I labelled P, Q, R, S and Column II labelled
    1, 2, 3, 4. Options like "P-2, Q-4, R-1, S-3". Never label with A–D:
    the screen already labels the options A–D.
  - Assertion–Reason (2 facts): a fact and its cause. Options exactly, in
    this order: "Both are true and Reason explains Assertion", "Both are true
    but Reason does not explain Assertion", "Assertion is true, Reason is
    false", "Assertion is false, Reason is true". keep_order true. Vary which
    is correct.
- Group only facts that belong together.

Quality:
- All 4 options are the same kind of thing as the answer: an organelle → four
  organelles from this chapter; a number → four numbers; a scientist → four
  scientists from this chapter. Wrong options are real terms or values from
  this chapter in the wrong place, or common mistakes. Never silly, never
  from outside the chapter.
- All options are about the same length, up to 15 words each. The correct
  option is never the longest.
- Never write "the chapter", "the book", "the text", "described", "stated" or
  "according to", in questions or explanations. Ask about what a figure shows
  in words.
- Exactly one correct option. Avoid "None of the above". Use "All of the
  above" rarely.
- Mix recall with understanding (why / what happens if).
- Length: a question up to 30 words (statements and match up to 80); an
  explanation 1–3 sentences, up to 50 words, saying why the answer is right
  and correcting each false statement. For numericals, show the key step.

## 3. SQL FORMAT (one broken row makes the whole part fail)

Every question reply has exactly this shape (example only):

```sql
insert into chapters (slug, class, subject, title)
values ('{{CHAPTER_SLUG}}', '{{CLASS}}', '{{SUBJECT}}', $${{CHAPTER_TITLE}}$$)
on conflict (slug) do nothing;

insert into mcqs (chapter_slug, position, question, options, answer, explanation, keep_order)
values
-- Q1: F1
(
  '{{CHAPTER_SLUG}}', 1,
  $$A microscope has a 15X eyepiece and a 10X objective lens. What is its total magnification?$$,
  $$["25X", "150X", "15X", "1.5X"]$$,
  $$150X$$,
  $$Total magnification = eyepiece × objective = 15 × 10 = 150X. Adding the two (25X) is a common mistake.$$,
  false
),
-- Q2: F2, F3, F4
(
  '{{CHAPTER_SLUG}}', 2,
  $$Consider the following statements about the plasma membrane:
1. It is selectively permeable.
2. It is made of lipids and proteins.
3. It is found only in plant cells.
Which of these statements are correct?$$,
  $$["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"]$$,
  $$1 and 2 only$$,
  $$The plasma membrane is selectively permeable and made of lipids and proteins. Statement 3 is false: every cell has a plasma membrane.$$,
  true
),
-- Q3: F5, F6, F7, F8
(
  '{{CHAPTER_SLUG}}', 3,
  $$Match Column I with Column II.
Column I
P. Ribosome
Q. Lysosome
R. Chloroplast
S. Nucleus
Column II
1. Photosynthesis
2. Protein synthesis
3. Controls the cell's activities
4. Digests worn-out cell parts$$,
  $$["P-2, Q-4, R-1, S-3", "P-4, Q-2, R-1, S-3", "P-2, Q-4, R-3, S-1", "P-1, Q-4, R-2, S-3"]$$,
  $$P-2, Q-4, R-1, S-3$$,
  $$Ribosomes make proteins, lysosomes digest worn-out parts, chloroplasts carry out photosynthesis and the nucleus controls the cell's activities.$$,
  false
);
-- NEXT: F9 onward
```

Rules:
- Every question reply starts with the chapters insert exactly as shown,
  then one mcqs insert.
- Write only these mcqs columns: chapter_slug, position, question, options,
  answer, explanation, keep_order. Never id, image or pyq_year.
- position continues across replies with no gaps or repeats: if the last
  part ended at 18, this part starts at 19. Every row has the same
  CHAPTER_SLUG.
- Every text value goes inside $$ … $$, which allows apostrophes. Never put
  $$ inside the content.
- A new line is a real line break inside $$ … $$. Never write \n: it shows on
  screen as \n.
- Plain text only: no markdown, HTML or LaTeX. Use Unicode: H₂O, x², 10⁻³,
  m/s², √, ×, →, °C.
- options: a JSON array of exactly 4 different strings, on one line, in
  double quotes, with no trailing comma. No " inside an option, no "A)" or
  "1." in front of it, and never "Both A and B" (the options get shuffled).
- answer: the correct option's text copied character for character. Never a
  letter.
- keep_order: true only for numbered statements, Assertion–Reason and "All of
  the above". Otherwise false.
- Rows are separated by commas. The last row ends with ); and the mcqs insert
  has no "on conflict".
- End the reply with -- NEXT: F… onward (the first fact of the next part),
  or with -- DONE when every fact is covered.

## 4. BEFORE EACH REPLY

Fact list:
- Every heading and box title of the chapter appears, down to the last one.
- Figures, tables, stains and chemicals, full forms, word meanings and
  exercise concepts are listed.

Questions:
- Every fact of this part is named in exactly one "-- Q" line, and no line
  repeats a fact from an earlier part.
- One-answer questions name at most 2 facts.
- Numbered-statement answers follow the cycle.
- Options are the same kind as the answer, about the same length, and never
  silly. The correct one is never the longest.
- No "the chapter", "described", "stated" or "according to" anywhere.
- Every answer is an exact copy of one of its options.
- The SQL follows section 3.
