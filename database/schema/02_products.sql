-- Catalog of purchasable courses. Replaces the free-text course values
-- that were originally used directly on purchases.course.
create table products (
  product_code text primary key
    check (product_code ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),

  name text not null,

  description text,

  price numeric(10,2) not null
    check (price >= 0),

  currency text not null default 'INR'
    check (currency in ('INR')),

  access_until timestamptz not null,

  is_active boolean not null default true,

  created_at timestamptz not null default now()
);

alter table products enable row level security;

-- Anyone (logged in or not) can browse active products, e.g. a pricing page.
create policy "read active products"
on products
for select
to anon, authenticated
using (is_active = true);

insert into products (
  product_code,
  name,
  description,
  price,
  access_until
)
values (
  'class9-premium',
  'Class 9 Premium 2027',
  'Complete premium access for Class 9 students.',
  499.00,
  '2027-03-31 23:59:59+05:30'
);
