# Important Questions Prompt (paste into any AI)

Goal: the 60 questions CBSE school exams (periodic tests, half-yearly,
annual) ask most often for this chapter. The syllabus changed, so the new
chapters have no past papers yet. The AI finds where each topic was taught
in the OLD syllabus, rates how often school exams asked it there, and asks
the new chapter's content the same way, most-asked first. The old
chapter's own NCERT and Exemplar questions are what school exams repeated
most, so every one whose content is still in the new chapter is included.

1. Copy everything below the `---` line and fill in the values.
2. Attach the NEW chapter PDF (required). For closer matching, also attach
   any of these you have: the old chapter PDF, old school exam papers, CBSE
   sample papers or board papers for the old chapter. Real papers are the
   AI's best source, better than its memory.
3. Use an AI with web search turned on if you can.
4. The AI first sends the TOPIC LIST with the OLD-SYLLABUS MAP, a
   frequency rating for each topic, and the OLD CLASSICS list. It has no
   SQL yet; that is expected. Check it:
   - every heading of the new chapter is there, down to the last one
   - the old chapters it names are the right ones
   - the ★★★ topics are really the ones your school exams ask every time
   - OLD CLASSICS has the questions your school asked every year
     (e.g. "Differentiate between plant cell and animal cell"). Add any it
     missed.
   If something is wrong, tell it. Then reply `next`.
5. Each `next` brings one SQL part (3 parts: 1-mark questions, short
   answers, long answers). Copy it with the code block's copy button and run
   it in the Supabase SQL editor. Keep replying `next` until a part ends with
   `-- DONE`.
6. Part 3 ends with `-- NOT ASKED:` listing the topics left out. It must
   not name an old classic (C item) or a ★★★ topic.
7. Skim the answers: the database rejects broken rows, but not a wrong fact.
8. Run this check. It must show exactly these numbers (60 questions, 133 marks):

   ```sql
   select type, count(*), sum(marks) from important_questions
   where chapter_slug = '…' group by type;
   ```

   | type | count | sum |
   |---|---|---|
   | very-short | 20 | 20 |
   | assertion-reason | 8 | 8 |
   | short | 22 | 55 |
   | long | 10 | 50 |

CHAPTER_SLUG must match `src/data/<class>/chapters/*.js` exactly.

| Supabase error mentions | meaning |
|---|---|
| `important_questions_check` | marks don't fit the type, e.g. a short question with 5 marks |
| `important_questions_type_check` | a misspelled type |
| `important_questions_tag_check` | a tag other than `Most asked` or `Diagram` |
| `important_questions_question_check` or `important_questions_answer_check` | an empty question or answer |
| `important_questions_chapter_slug_type_position_key` | these positions already exist. Run `delete from important_questions where chapter_slug = '…' and type in ('…');` with that part's types, then run the part again |
| `dollar-quoted` or `syntax error` | a broken `$$` near the line named |

The "Failing row" line shows which question. A failed part saves nothing,
so fix it and run that part again.

---

CHAPTER_TITLE: {{e.g. Cell: The Building Block of Life}}
CHAPTER_SLUG:  {{e.g. cell-the-building-block-of-life}}
CLASS:         {{class6 class7 class8 class9 class10 class11 class12}}
SUBJECT:       {{physics chemistry biology english socialscience maths}}
OLD_CHAPTERS:  {{optional, e.g. Class 9 (old syllabus): The Fundamental Unit of Life. Leave blank and you find them.}}

The syllabus has changed this year. The attached chapter is from the NEW
textbook, so it has no past exam papers yet. Your job: predict the 60
questions CBSE school exams for this class (periodic tests, half-yearly and
annual exams) are most likely to ask on this chapter, with model answers,
as SQL for a Supabase (PostgreSQL) table.

Do it by learning from the OLD syllabus:
- The NEW chapter decides WHAT to ask. Ask only about content that is in the
  attached chapter, using its terms, examples and values.
- The OLD syllabus decides HOW OFTEN and HOW it is asked. Find the old
  chapter(s), in any class, where each topic was taught. Use what you know
  about CBSE school exams in India on those chapters: which questions came
  again and again, their type, marks, wording, and what a full-marks answer
  contained.
- Never ask about content that was in the old chapter but is not in the new
  one.
- The old chapter's own NCERT questions (in-text and end-of-chapter), and
  the Exemplar or sample-paper questions that important-question lists
  repeat, are the OLD CLASSICS. School exams asked them again and again.
  Every classic whose content is in the new chapter must be in the 60.
- The NEW book's end-of-chapter questions are not required. Use one only
  when it matches a frequently asked pattern.

Sources, most trusted first:
1. Papers the user attached (old school papers, CBSE sample papers, board
   papers).
2. If you can search the web: CBSE sample papers, school question papers,
   NCERT Exemplar and important-question lists for the old chapter(s).
3. What you know about CBSE Class 9 school exams on the old chapter(s):
   sample papers, school papers, NCERT and Exemplar questions, and widely
   used question banks.
4. For a topic that is NEW (not in any old chapter): the way exams ask
   similar topics.
Never invent a past question. If you are not sure how often a topic was
asked, say "not sure" and do not rate it ★★★.

Work in several replies:
- Reply 1: only the TOPIC LIST with the OLD-SYLLABUS MAP, and the OLD
  CLASSICS (section 1). No questions yet.
- Each time the user says "next": the next part from section 2, as SQL
  (section 4).
Every reply is ONE ```sql code block and nothing else.
- No readable chapter attached → the block holds only:
  -- ERROR: no readable chapter attached
- The PDF has several chapters → use only CHAPTER_TITLE.
- Level: a CBSE school exam for that class. Every answer is a model answer
  that would get full marks.

## 1. REPLY 1: TOPIC LIST, OLD-SYLLABUS MAP, OLD CLASSICS

### SOURCES
List the old chapters you used, and which attached papers or searches you
used. Write any general doubt here, once.

### TOPIC LIST
Go through the whole NEW chapter in order. Write every heading as a
comment, in order, including box titles such as "Meet a Scientist", and
under it the exam-important topics as numbered lines (T1, T2, T3 …), ONE
topic per line.
- Write 40–55 topics in total. A topic is one idea an exam asks about, not
  one fact: merge related facts into one topic (e.g. "Nucleus: nuclear
  membrane, pores, nucleolus, chromatin"). Over 55 → merge more.
- Topics include definitions and key terms, structures and their functions,
  processes and their steps, differences, reasons (why …), causes and
  effects, examples, laws, formulas, units, figures that can be drawn, and
  what each activity shows.
- Each box (Meet a Scientist, Threads of Curiosity, Ready to Go Beyond,
  Bridging Science and Society) and the opening story is ONE topic at most:
  its main idea. Leave out side details such as institute names and awards.
- Under each topic, one "old:" line of at most 18 words: the old chapter,
  how often school exams asked it, and how (marks + the classic question).
- How often, judged from the old syllabus:
  ★★★ asked in almost every school exam on the old chapter; every
      important-question list has it
  ★★  asked often
  ★   asked sometimes
  NEW no old chapter had it
  not sure  you cannot tell
- Every heading must appear, down to the last one. Check the last pages as
  carefully as the first.
- Facts come only from the NEW book. Where it differs from the old book or
  other sources, follow the new book.

### OLD CLASSICS
List the classic questions of the old chapter(s), numbered C1, C2, C3 …,
each with the topic of the new chapter it belongs to:
- every in-text and end-of-chapter question of the old NCERT chapter(s)
- Exemplar and sample-paper questions that important-question lists repeat
Keep only those whose content is in the NEW chapter. Under "Left out",
name the ones whose content the new chapter dropped. Write each classic in
its old wording; change words only where the new book uses different
terms. Never invent a classic: list only questions you are sure the old
book or these lists had. Mark every topic a classic points to ★★★.

Format (example only):

```sql
-- SOURCES
--   Old chapter: Class 9 (old syllabus) The Fundamental Unit of Life
--   Old chapter: Class 11 (old syllabus) Cell Cycle and Cell Division
--   Attached papers: none. Web search: CBSE sample papers for the old chapters
--   Doubt: the Class 11 topics were asked at Class 11 level
-- TOPIC LIST
-- 2.1 How to Study Cells?
--   T1 Limit of resolution of the human eye (0.1 mm)
--      old: NEW — usual style: 1m value
--   T2 Estimating cell size; total magnification = eyepiece × objective
--      old: NEW — usual style: 2m/3m numerical
-- 2.2.1 Cell membrane
--   T3 Osmosis and diffusion, and their differences
--      old: The Fundamental Unit of Life — ★★★ 1m define osmosis; 3m differentiate
-- Mitochondria — The powerhouse of the cell
--   T4 Mitochondria: two membranes, cristae, ATP
--      old: The Fundamental Unit of Life — ★★★ 1m "Why called powerhouse?"; 2m cristae
-- Meet a Scientist: Camillo Golgi
--   T5 Camillo Golgi observed the Golgi apparatus (1898)
--      old: The Fundamental Unit of Life — ★ 1m who discovered
-- OLD CLASSICS
--   C1 Differentiate between plant cell and animal cell. → T9
--   C2 How do substances like CO₂ and water move in and out of the cell? → T3
--   C3 What would happen if the plasma membrane ruptures or breaks down? → T6
--   C4 What would happen to the life of a cell if there was no Golgi apparatus? → T12
--   C5 Name two organelles that have their own genetic material. → T4
--   Left out: Why are lysosomes called suicide bags? (new chapter dropped it)
-- Reply "next" for the questions.
```

## 2. THE PARTS

| reply | type | how many | marks | positions |
|---|---|---|---|---|
| next 1 | very-short | 20 | 1 each | 1–20 |
| next 1 | assertion-reason | 8 | 1 each | 1–8 |
| next 2 | short | 22 | exactly 11 of 2 marks and 11 of 3 marks | 1–22 |
| next 3 | long | 10 | 5 each | 1–10 |

Exactly these numbers: 60 questions in total. Within each type, position
follows the chapter order, so position 1 asks about the earliest topic.

What goes into the 60, in this order:
1. Every OLD CLASSIC (C item). Never drop one.
2. Every ★★★ topic.
3. ★★ topics.
4. NEW topics from the main text (not from boxes), asked the way exams ask
   similar topics.
5. ★ topics.
If 60 questions cannot hold everything, drop from the bottom of this order.

How many per topic:
- Most topics get 1 or 2 questions. A ★★★ topic may get 3 only if each
  asks something different (e.g. a 1-mark definition, a 3-mark difference,
  a 5-mark diagram). Never more than 3, counting every type, so no topic
  crowds out others.

How to ask:
- Ask each topic with the type, marks and classic wording its "old:" line
  shows ("Why is … called …?", "Give reasons", "State", "Differentiate
  between", "What happens when", "Draw a neat labelled diagram of"). Change
  only the content to fit the new chapter.
- Ask each OLD CLASSIC in its old wording, with the answer from the new
  book.
- Every formula in the chapter gets one worked numerical with NEW numbers,
  not the book's example: formula, values, working, and the answer with its
  unit.
- Content found only in a box (Meet a Scientist, Threads of Curiosity,
  Ready to Go Beyond, Bridging Science and Society) or in the opening story:
  very-short or 2-mark short only, never 3-mark or long, and at most 6 such
  questions in total.

Coverage:
- Before each question, write a comment naming its topics and classics,
  numbering the questions Q1–Q60 across all parts:
  -- Q7: T12, C3
- Spread every type over the whole chapter, not only the first headings.
- Never ask the same thing twice, even in other words. Two questions whose
  answers are mostly the same are duplicates: a long question that only
  adds a diagram to a short one is a duplicate.
- At the end of part 3, before -- DONE, write:
  -- NOT ASKED: the topics left out, or "none". Never a C item or a ★★★
  topic.

## 3. HOW EACH TYPE LOOKS

very-short (1 mark):
- Answerable in one word or one sentence: define, name, what is, which, full
  form, one example, one function.
- Answer: 1–2 sentences, up to 30 words.

assertion-reason (1 mark):
- question: exactly two lines, both about the same idea:
  Assertion (A): …
  Reason (R): …
- A and R are two separate facts. R is never just the opposite of A, or A
  in other words.
- answer: the first line is exactly one of these four, copied character for
  character:
  (a) Both A and R are true, and R is the correct explanation of A.
  (b) Both A and R are true, but R is not the correct explanation of A.
  (c) A is true, but R is false.
  (d) A is false, but R is true.
  For (b), (c) and (d), add one more line saying why.
- Across the 8: (a) at most 3 times; (b), (c) and (d) at least once each.

short (2 or 3 marks):
- Asks: differentiate, give reasons, explain how or why, what happens when,
  describe briefly, functions, numericals.
- 2 marks: 2–3 points, up to 60 words. 3 marks: 3–4 points, up to 90 words.
- Each point on its own line, starting with "• " or "1. ", "2. ".
- Differences: the first line is "X → Y", then numbered lines
  "1. … → …". A 3-mark difference has at least 3 lines.
- A question with parts: (a), (b) each on its own line, in the question and
  in the answer.

long (5 marks):
- Asks: explain in detail, describe a process step by step, draw and label,
  differences with reasons, or a question in parts (a) (b) (c).
- answer: 5–8 points, up to 200 words. A part's heading ends with ":" on its
  own line, with a blank line between parts.
- Draw and label: the answer starts "Draw … and label:", then one
  "• label" per line, then explanation points if the question asks for them.
  If the chapter has labelled figures, at least 2 long questions ask to draw
  one.

Every type:
- Never write "the chapter", "the book", "the text", "described", "stated" or
  "according to".
- Pictures are never shown with the question. Never write "in the figure",
  "identify the part labelled X" or "look at the image". Describe it in words.
- Never mention a year, "board exam", "PYQ", "previous year", "old syllabus"
  or "new syllabus" in a question or answer.
- Mix recall with understanding (why / what happens if / application).
- Numericals: formula, values, working, and the answer with its unit.

tag:
- 'Most asked': OLD CLASSICS and the classic questions on ★★★ topics.
  Never on a NEW topic. About 12 of the 60, spread over all types, never
  more than 15.
- 'Diagram': every question that asks to draw or label.
- null: everything else. One tag per question; a diagram question is always
  'Diagram'.

## 4. SQL FORMAT (one broken row makes the whole part fail)

Every part has exactly this shape (example only, part 1):

```sql
insert into chapters (slug, class, subject, title)
values ('{{CHAPTER_SLUG}}', '{{CLASS}}', '{{SUBJECT}}', $${{CHAPTER_TITLE}}$$)
on conflict (slug) do nothing;

insert into important_questions (chapter_slug, type, position, marks, question, answer, tag)
values
-- Q1: T1
(
  '{{CHAPTER_SLUG}}', 'very-short', 1, 1,
  $$What is the limit of resolution of the human eye?$$,
  $$About 0.1 mm. Two points closer than this, seen from about 25 cm, appear as one point.$$,
  null
),
-- Q2: T4
(
  '{{CHAPTER_SLUG}}', 'very-short', 2, 1,
  $$Why are mitochondria called the powerhouse of the cell?$$,
  $$Because they release the energy needed for most cell activities and store it as ATP.$$,
  'Most asked'
),
-- Q21: T4
(
  '{{CHAPTER_SLUG}}', 'assertion-reason', 1, 1,
  $$Assertion (A): The inner membrane of a mitochondrion is folded into cristae.
Reason (R): Mitochondria have their own DNA and ribosomes.$$,
  $$(b) Both A and R are true, but R is not the correct explanation of A.
The inner membrane is folded to increase the surface area for chemical reactions, not because mitochondria have their own DNA.$$,
  null
);
-- NEXT: short
```

A short row and a long row look like this:

```sql
-- Q30: T2
(
  '{{CHAPTER_SLUG}}', 'short', 2, 3,
  $$The diameter of the field of view of a microscope is 4 mm. 20 onion peel cells are seen in a line along this diameter. Find the size of one cell in micrometres.$$,
  $$Diameter of field = 4 mm = 4 × 1000 = 4000 µm.
Size of one cell = Diameter of field ÷ Number of cells along it
= 4000 µm ÷ 20
= 200 µm.$$,
  null
),
-- Q51: T9
(
  '{{CHAPTER_SLUG}}', 'long', 1, 5,
  $$Draw a neat, labelled diagram of a plant cell.$$,
  $$Draw a box-shaped cell with a thick outer cell wall, and label:
• Cell wall
• Cell membrane
• Cytoplasm
• Nucleus — nucleolus
• Endoplasmic reticulum
• Golgi apparatus
• Mitochondria
• Chloroplast
• Ribosome
• Large central vacuole$$,
  'Diagram'
),
```

Rules:
- Every part starts with the chapters insert exactly as shown, then one
  important_questions insert.
- Write only these columns: chapter_slug, type, position, marks, question,
  answer, tag. Never id, image or pyq_year.
- type is exactly 'very-short', 'assertion-reason', 'short' or 'long'.
- marks: very-short 1, assertion-reason 1, short 2 or 3, long 5. Any other
  number fails.
- tag is exactly 'Most asked' or 'Diagram' in single quotes, or null with no
  quotes.
- position starts at 1 for each type and counts up with no gaps or repeats.
  Every row has the same CHAPTER_SLUG.
- question and answer go inside $$ … $$, which allows apostrophes. Never put
  $$ inside the content.
- A new line is a real line break inside $$ … $$. Never write \n: it shows on
  screen as \n.
- Plain text only: no markdown (no **, #, or tables), HTML or LaTeX. Use
  Unicode: H₂O, CO₂, x², 10⁻³, m/s², √, ×, ÷, →, °C, µm.
- Rows are separated by commas. The last row ends with ); and the
  important_questions insert has no "on conflict".
- End part 1 with -- NEXT: short, part 2 with -- NEXT: long, and part 3 with
  -- NOT ASKED: … and then -- DONE.

## 5. BEFORE EACH REPLY

Reply 1:
- Sources are listed: old chapters, attached papers, searches.
- Every heading and box title of the new chapter appears, down to the last
  one.
- 40–55 topics. Every topic has an "old:" line of at most 18 words with a
  rating (★★★, ★★, ★, NEW or not sure). Nothing is made up; when unsure,
  "not sure", never ★★★.
- OLD CLASSICS lists every old NCERT in-text and end-of-chapter question
  whose content is in the new chapter, plus the Exemplar and sample-paper
  questions lists repeat. Dropped ones are under "Left out". None invented.

Questions:
- This part has exactly the count and marks from section 2.
- Every C item is asked, in its old wording. Every ★★★ topic is asked;
  ★★★ topics come before ★★, NEW and ★ topics.
- No topic has more than 3 questions; most have 1 or 2.
- Box-only content: at most 6 questions, never 3-mark or long.
- Every formula has one worked numerical with new numbers.
- Every question is about content in the NEW chapter; nothing comes only
  from the old chapter.
- No question repeats an earlier one, even in other words, and no long
  question just adds a diagram to a short one.
- Assertion–Reason: A and R are separate facts; answers start with one of
  the four lines, copied exactly; every (b), (c) and (d) answer has a
  second line saying why.
- Answer lengths fit the marks.
- No "the chapter", "in the figure", years, "PYQ" or "syllabus" anywhere.
- About 12 'Most asked' in total, on C items and ★★★ topics, never on NEW
  topics; every draw/label question is 'Diagram'.
- Every question has a "-- Q" line naming its topics and classics. Part 3
  ends with NOT ASKED, which names no C item and no ★★★ topic.
- The SQL follows section 4.
