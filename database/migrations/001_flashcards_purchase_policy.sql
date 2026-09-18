-- Replaces the open "any authenticated user" read policy with one that
-- checks the reader owns the chapter's class. Requires has_class_access
-- (see ../schema/06_access.sql).
--
-- Applied: 5 August 2026.

drop policy "authenticated can read flashcards" on flashcards;

create policy "read flashcards for purchased class"
on flashcards
for select
to authenticated
using (
  exists(
    select 1 from chapters
    where chapters.slug = flashcards.chapter_slug
    and has_class_access(chapters.class)
  )
);
