-- One row per chapter of content. slug is a human-readable key
-- (e.g. class9-physics-motion) used directly in URLs and referenced by
-- flashcards.
create table chapters (
  slug text primary key,

  class text not null
    check (
      class in (
        'class6',
        'class7',
        'class8',
        'class9',
        'class10',
        'class11',
        'class12'
      )
    ),

  subject text not null
    check (
      subject in (
        'physics',
        'chemistry',
        'biology',
        'english',
        'socialscience',
        'maths'
      )
    ),

  title text not null
);


-- RLS
alter table chapters enable row level security;

-- Any logged-in student can read every chapter.
create policy "authenticated can read chapters"
on chapters
for select
to authenticated
using (true);
