-- Q&A flashcards belonging to a chapter. position orders the cards within a
-- chapter and is unique per chapter, so no two cards share a slot.
--
-- Seeding: the chapters row must be inserted BEFORE its cards, or the
-- chapter_slug foreign key rejects the whole INSERT. position restarts at 1
-- for every chapter, since the unique constraint is on the pair. See
-- ../README.md "Seeding content".
create table flashcards (
  id bigint generated always as identity primary key,

  chapter_slug text not null
    references chapters(slug)
    on delete cascade,

  question text not null,

  answer text not null,

  position int not null default 0
    check (position >= 0),

  unique (chapter_slug, position)
);


-- Indexes
create index idx_flashcards_chapter
on flashcards(chapter_slug);


-- RLS
alter table flashcards enable row level security;

create policy "authenticated can read flashcards"
on flashcards
for select
to authenticated
using (true);
