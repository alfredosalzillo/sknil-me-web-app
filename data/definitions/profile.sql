-- Create a table for Public Profiles
create table public."Profiles"
(
    id         uuid references auth.users not null,
    full_name  text,
    username   text unique,
    avatar_url text,
    updated_at timestamp with time zone,

    primary key (id),
    unique (username),
    constraint "username length" check (char_length(username) >= 3)
);

alter table public."Profiles"
    enable row level security;

create
    policy "Public Profiles are viewable by everyone."
    on public."Profiles" for
    select
    using (true);

create
    policy "Users can insert their own profile."
    on public."Profiles" for insert
    with check (auth.uid() = id);

create
    policy "Users can update own profile."
    on public."Profiles" for
    update
    using (auth.uid() = id);

-- This trigger automatically creates a profile entry when a new user signs up via Supabase Auth.
-- See https://supabase.com/docs/guides/auth/managing-user-data#using-triggers for more details.
create or replace function public.handle_new_user()
    returns trigger as
$$
begin
    insert into public."Profiles" (id, full_name, avatar_url)
    values (new.id, new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'avatar_url');
    return new;
end;
$$ language plpgsql security definer;
create or replace trigger on_auth_user_created
    after insert
    on auth.users
    for each row
execute procedure public.handle_new_user();

-- Set up Realtime!
begin;
drop
    publication if exists supabase_realtime;
create
    publication supabase_realtime;
commit;
alter
    publication supabase_realtime add table public."Profiles";

-- Set up Storage!
insert into storage.buckets (id, name)
values ('avatars', 'avatars');

create
    policy "Avatar images are publicly accessible."
    on storage.objects for
    select
    using (bucket_id = 'avatars');

create
    policy "Anyone can upload an avatar."
    on storage.objects for insert
    with check (bucket_id = 'avatars');

create
    policy "Anyone can update an avatar."
    on storage.objects for
    update
    with check (bucket_id = 'avatars');