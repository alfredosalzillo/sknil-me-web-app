
create function max_link_ordinal(in user_id uuid) returns numeric as
$$
begin
    return (select max(ordinal)
            from public.link
            where public.link.user_id = max_link_ordinal.user_id);
end;
$$ language plpgsql;

create table public.link
(
    id         uuid      default gen_random_uuid() not null primary key,
    user_id    uuid      default auth.uid()        not null,
    name       text                                not null,
    url        text                                not null,
    active     boolean   default true,
    ordinal    integer   default max_link_ordinal(auth.uid()) + 1,
    created_at timestamp default now(),
    updated_at timestamp default now(),

    constraint unique_user_id_url unique (user_id, url)
);

alter table public.link
    enable row level security;

create
    policy "all can read active link, owner can read all owned links"
    on public.link
    for select
    using (auth.uid() = user_id or active = true);

create
    policy "individuals can create their own link"
    on public.link
    for insert
    with check (auth.uid() = user_id);

create
    policy "individuals can update their own link"
    on public.link
    for update
    using (auth.uid() = user_id)
    with check (auth.uid() = user_id);

create
    policy "individuals can delete their own link"
    on public.link
    for delete
    using (auth.uid() = user_id);

create trigger handle_updated_at_links
    before update
    on public.link
    for each row
execute procedure extensions.moddatetime(updated_at);

