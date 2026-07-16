-- One row per signed-up student. Shares identity with Supabase Auth.
create table students (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text not null,
  email text not null,
  phone text,
  created_at timestamptz not null default now()
);

alter table students enable row level security;

-- A logged-in student can read only their own row.
create policy "students can view own row"
  on students for select
  using (auth.uid() = id);

-- Auto-copies id, full name and email from auth.users into students on signup.
create function public.handle_new_student()
returns trigger as $$
begin
  insert into public.students (id, full_name, email)
  values (new.id, new.raw_user_meta_data->>'full_name', new.email);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_student();
