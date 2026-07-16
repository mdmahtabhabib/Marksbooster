-- One row per buying event. One student can have many purchases.
create table purchases (
  id bigint generated always as identity primary key,
  student_id uuid not null references students (id) on delete cascade,
  course text not null,
  amount_paid numeric not null,
  payment_status text not null default 'completed'
    check (payment_status in ('pending', 'completed', 'failed', 'refunded')),
  purchased_at timestamptz not null default now(),
  unique (student_id, course)
);

alter table purchases enable row level security;

-- A student can read only their own purchases.
create policy "students can view own purchases"
  on purchases for select
  using (auth.uid() = student_id);

-- No insert policy: purchases are added by the admin via Supabase's
-- Table Editor after payment is confirmed, not by the frontend.
