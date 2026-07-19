-- Q&A flashcards belonging to a chapter. position orders the cards within a
-- chapter and is unique per chapter, so no two cards share a slot.
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
