create table public.links_stats
(
    id           uuid                              default gen_random_uuid() primary key,
    link_id      uuid                     not null references public.link (id),
    action       text                     not null,
    ip           inet,
    country_code text,
    referrer     text,
    user_agent   text,
    os           text,
    browser      text,
    device       text,
    created_at   timestamp with time zone not null default now(),
    updated_at   timestamp with time zone not null default now()
);

alter table public.links_stats
    enable row level security;

create
    policy "all can read links stats"
    on public.links_stats
    for select
    using (true);

create
    policy "all can create links stats"
    on public.links_stats
    for insert
    with check (true);

create
    policy "no one can update links stats"
    on public.links_stats
    for update
    with check (false);

create
    policy "no one can delete links stats"
    on public.links_stats
    for delete
    using (false);

create trigger handle_updated_at_links_stats
    before update
    on public.links_stats
    for each row
execute procedure extensions.moddatetime(updated_at);