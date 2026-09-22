-- Short notes for a chapter. One row per chapter, so chapter_slug is the
-- primary key and not just a foreign key: a chapter cannot have two sets of
-- notes.
--
-- The notes tree (sections -> items -> bullets/table/note) is stored whole in
-- the sections jsonb column. Items are not uniform -- some carry bullets, some
-- a table, some a note -- and the page is always read in full, so splitting the
-- tree across tables would add joins and ordering for no gain.
--
-- title is NOT stored here. It already lives on chapters and is read from there
-- in the same query, so there is only one source of truth for it.
--
-- Seeding: the chapters row must be inserted BEFORE its notes, or the
-- chapter_slug foreign key rejects the whole INSERT. See ../README.md
-- "Seeding content".
create table short_notes (
  chapter_slug text primary key
    references chapters(slug)
    on delete cascade,

  kicker text,

  subtitle text,

  footer text,

  -- not null only blocks SQL NULL. 'null'::jsonb, '{}' and '[]' are all
  -- non-NULL jsonb values that would pass it and then crash sections.map()
  -- in the browser, so the shape is checked here instead.
  sections jsonb not null
    check (
      jsonb_typeof(sections) = 'array'
      and jsonb_array_length(sections) > 0
    )
);


-- Indexes
-- None needed: chapter_slug is the primary key, so it is already indexed, and
-- short notes are only ever fetched by it.


-- RLS
alter table short_notes enable row level security;

-- Gated on purchase from the start, matching the policy migrations/001 gave
-- flashcards. has_class_access is security definer, so it can see purchases
-- and products regardless of their own RLS (see 06_access.sql).
create policy "read short notes for purchased class"
on short_notes
for select
to authenticated
using (
  exists (
    select 1
    from chapters
    where chapters.slug = short_notes.chapter_slug
      and has_class_access(chapters.class)
  )
);
