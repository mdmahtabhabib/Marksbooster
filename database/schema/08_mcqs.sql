-- Multiple-choice questions for a chapter (Concept check, later NEET PYQs).
-- One row per question. position orders them within a chapter and restarts
-- at 1 for every chapter.
--
-- options is a jsonb array, so it arrives in React as a normal array.
-- answer is the TEXT of the correct option, not its index, because the
-- options are shuffled in the browser.
--
-- Seeding: insert the chapters row BEFORE its questions, or the chapter_slug
-- foreign key rejects the whole INSERT. Never write id in the insert -- the
-- database generates it.

create table mcqs(
  id bigint generated always as identity primary key,

  chapter_slug text not null
   references chapters(slug) on delete cascade,

   position int not null check(position >= 1),

   question text not null,

   options jsonb not null  check ( jsonb_typeof(options) = 'array' and jsonb_array_length(options) between 2 and 6 ),

   answer text not null,

   explanation text,

   image text,

   keep_order boolean not null default false,

     -- null = our own practice question, 2023 = asked in the 2023 exam
     pyq_year int,

     unique(chapter_slug, position),

     -- answer must exactly match one of the options
     check(options ? answer)
);


-- Indexes
-- None needed: unique (chapter_slug, position) already creates an index that
-- starts with chapter_slug, so loading a chapter's questions is fast.


-- RLS
alter table mcqs enable row level security;

-- Same purchase gate as short_notes (see 07_short_notes.sql).
create policy "read mcqs for purchased class"
on mcqs
for select
to authenticated
using(
  exists(
    select 1
    from chapters
    where chapters.slug = mcqs.chapter_slug
    and has_class_access(chapters.class)
  )
);
