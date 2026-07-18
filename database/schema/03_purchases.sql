-- One row per buying event. One student can have many purchases.
create table purchases (
  id bigint generated always as identity primary key,

  student_id uuid not null
    references students(id)
    on delete cascade,

  product_code text not null
    references products(product_code)
    on update cascade,

  amount_paid numeric(10,2) not null
    check (amount_paid >= 0),

  currency text not null default 'INR'
    check (currency in ('INR')),

  payment_status text not null default 'pending'
    check (
      payment_status in (
        'pending',
        'completed',
        'failed',
        'refunded'
      )
    ),

  gateway_order_id text,
  payment_reference text unique,

  created_at timestamptz not null default now(),
  purchased_at timestamptz,
  expires_at timestamptz
);


-- Indexes
create index idx_purchases_student
on purchases(student_id);

create index idx_purchases_product
on purchases(product_code);

create index idx_purchases_status
on purchases(payment_status);

create unique index idx_student_product_completed
on purchases(student_id, product_code)
where payment_status = 'completed';

create unique index idx_purchases_gateway_order
on purchases(gateway_order_id)
where gateway_order_id is not null;


-- RLS
alter table purchases enable row level security;

create policy "read own purchases"
on purchases for select
to authenticated
using (student_id = auth.uid());
