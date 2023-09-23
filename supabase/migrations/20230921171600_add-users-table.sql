create or replace view public.user as
select id,
       raw_user_meta_data ->> 'username' as username,
       raw_user_meta_data ->> 'full_name' as full_name,
       raw_user_meta_data ->> 'avatar'    as avatar
from auth.users;