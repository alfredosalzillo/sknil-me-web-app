create table public.links_stats_log
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

alter table public.links_stats_log
    enable row level security;

create
    policy "all can read links stats log"
    on public.links_stats_log
    for select
    using (true);

create
    policy "all can create links stats log"
    on public.links_stats_log
    for insert
    with check (true);

create
    policy "no one can update links stats log"
    on public.links_stats_log
    for update
    with check (false);

create
    policy "no one can delete links stats log"
    on public.links_stats_log
    for delete
    using (false);

create trigger handle_updated_at_links_stats_log
    before update
    on public.links_stats_log
    for each row
execute procedure extensions.moddatetime(updated_at);