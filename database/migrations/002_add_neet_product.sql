-- Adds the NEET course to the products catalog. Nothing NEET-specific was
-- missing from the schema itself -- products.unlocks_class already allowed
-- 'neet' -- but no product row unlocked it, so /home/neet could never open
-- for anyone. See ../schema/02_products.sql for the class9-premium seed.
--
-- Applied: 27 August 2026.

insert into products (
  product_code,
  name,
  description,
  price,
  unlocks_class,
  access_until
)
values (
  'neet-complete',
  'Complete NEET 2027',
  'Everything you need to crack NEET.',
  999.00,
  'neet',
  '2027-05-31 23:59:59+05:30'
);
