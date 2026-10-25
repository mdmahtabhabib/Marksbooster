-- Important questions for a chapter (Important Q&A, later class 10 PYQs).
-- One row per question. position orders them inside their section (type)
-- and restarts at 1 for every section.
--
-- type must be one of the keys in QUESTION_TYPES in Importantquestion.jsx,
-- or the question never shows on the paper. Change both together.
--
-- Seeding: insert the chapters row BEFORE its questions, or the chapter_slug
-- foreign key rejects the whole INSERT. Never write id in the insert -- the
-- database generates it.

create table important_questions(
  id bigint generated always as identity primary key,

  chapter_slug text not null
   references chapters(slug) on delete cascade ,

   type text not null
        check(type in ('very-short' , 'assertion-reason' , 'short' , 'long')) ,

        position int not null check (position >= 1),

        marks int not null,

 -- not null only blocks NULL; '' would show a blank numbered row
 question text not null check (btrim(question)<>''),

 -- null = no "View answer" button. Blank text would open an empty answer.
 answer text check (btrim(answer)<>'') ,

  -- fixed list so AI content can't invent new spellings.
  -- PYQ is not a tag -- use pyq_year.
  tag text check (tag in ('Most asked' , 'Diagram')),

   -- diagram url shown inside the answer. Blank text would show a broken image.
   image text check(btrim(image) <>''),

  -- null = our own question, 2023 = asked in the 2023 exam
pyq_year int check (pyq_year between 2000 and 2100 ) ,

-- position restarts at 1 in every section, so type is part of the rule
unique(chapter_slug, type, position),

--marks must match the section heading in QUESTION_TYPES
check(
  (type in ('very-short' , 'assertion-reason') and marks = 1)
  or (type = 'short' and marks in (2 , 3))
  or (type = 'long' and marks= 5)
)
);

-- Indexes
-- None needed: unique (chapter_slug, type, position) already creates an index
-- that starts with chapter_slug, so loading a chapter's questions is fast.


-- RLS
alter table important_questions enable row level security;

-- Same purchase gate as short_notes (see 07_short_notes.sql).
create policy "read important questions for purchased class"
on important_questions
for select
to authenticated
using (
  exists(
    select 1
    from chapters
    where chapters.slug = important_questions.chapter_slug
    and has_class_access(chapters.class)
  )
);
