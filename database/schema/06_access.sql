-- Returns true if the logged-in student has a completed, unexpired
-- purchase of a product that unlocks target_class.
-- security definer: must see inactive products so past buyers keep access.
create or replace function has_class_access(target_class text)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
    select exists(
      select 1
      from purchases
      join products on products.product_code = purchases.product_code
      where purchases.student_id = auth.uid()
      and purchases.payment_status = 'completed'
      and products.unlocks_class = target_class
      and (purchases.expires_at is null or purchases.expires_at > now())
    );
$$;
