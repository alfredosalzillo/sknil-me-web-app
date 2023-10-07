create or replace function public.update_links_order(payload json) returns setof public.link as
$$
update public.link as l
set ordinal = x.ordinal
from (select id, ordinal from json_populate_recordset(null::public.link, payload)) as x
where l.id = x.id
returning l.*;
$$ language sql;