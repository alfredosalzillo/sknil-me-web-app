
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

ALTER SCHEMA "public" OWNER TO "postgres";

CREATE EXTENSION IF NOT EXISTS "moddatetime" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

CREATE OR REPLACE FUNCTION "public"."max_link_ordinal"("user_id" "uuid") RETURNS numeric
    LANGUAGE "plpgsql"
    AS $$
begin
    return (select max(ordinal)
            from public.link
            where public.link.user_id = max_link_ordinal.user_id);
end;
$$;

ALTER FUNCTION "public"."max_link_ordinal"("user_id" "uuid") OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE IF NOT EXISTS "public"."link" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "user_id" "uuid" DEFAULT "auth"."uid"() NOT NULL,
    "name" "text" NOT NULL,
    "url" "text" NOT NULL,
    "active" boolean DEFAULT true,
    "ordinal" integer DEFAULT ("public"."max_link_ordinal"("auth"."uid"()) + (1)::numeric),
    "created_at" timestamp without time zone DEFAULT "now"(),
    "updated_at" timestamp without time zone DEFAULT "now"()
);

ALTER TABLE "public"."link" OWNER TO "postgres";

CREATE OR REPLACE FUNCTION "public"."update_links_order"("payload" "json") RETURNS SETOF "public"."link"
    LANGUAGE "sql"
    AS $$
update public.link as l
set ordinal = x.ordinal
from (select id, ordinal from json_populate_recordset(null::public.link, payload)) as x
where l.id = x.id
returning l.*;
$$;

ALTER FUNCTION "public"."update_links_order"("payload" "json") OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."links_stats_log" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "link_id" "uuid" NOT NULL,
    "action" "text" NOT NULL,
    "ip" "inet",
    "country_code" "text",
    "referrer" "text",
    "user_agent" "text",
    "os" "text",
    "browser" "text",
    "device" "text",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL
);

ALTER TABLE "public"."links_stats_log" OWNER TO "postgres";

CREATE OR REPLACE VIEW "public"."user" AS
 SELECT "users"."id",
    ("users"."raw_user_meta_data" ->> 'username'::"text") AS "username",
    ("users"."raw_user_meta_data" ->> 'full_name'::"text") AS "full_name",
    ("users"."raw_user_meta_data" ->> 'avatar'::"text") AS "avatar"
   FROM "auth"."users";

ALTER TABLE "public"."user" OWNER TO "postgres";

ALTER TABLE ONLY "public"."link"
    ADD CONSTRAINT "link_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."links_stats_log"
    ADD CONSTRAINT "links_stats_log_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."link"
    ADD CONSTRAINT "unique_user_id_url" UNIQUE ("user_id", "url");

CREATE OR REPLACE TRIGGER "handle_updated_at_links" BEFORE UPDATE ON "public"."link" FOR EACH ROW EXECUTE FUNCTION "extensions"."moddatetime"('updated_at');

CREATE OR REPLACE TRIGGER "handle_updated_at_links_stats_log" BEFORE UPDATE ON "public"."links_stats_log" FOR EACH ROW EXECUTE FUNCTION "extensions"."moddatetime"('updated_at');

ALTER TABLE ONLY "public"."links_stats_log"
    ADD CONSTRAINT "links_stats_log_link_id_fkey" FOREIGN KEY ("link_id") REFERENCES "public"."link"("id");

CREATE POLICY "all can create links stats log" ON "public"."links_stats_log" FOR INSERT WITH CHECK (true);

CREATE POLICY "all can read active link, owner can read all owned links" ON "public"."link" FOR SELECT USING ((("auth"."uid"() = "user_id") OR ("active" = true)));

CREATE POLICY "all can read links stats log" ON "public"."links_stats_log" FOR SELECT USING (true);

CREATE POLICY "individuals can create their own link" ON "public"."link" FOR INSERT WITH CHECK (("auth"."uid"() = "user_id"));

CREATE POLICY "individuals can delete their own link" ON "public"."link" FOR DELETE USING (("auth"."uid"() = "user_id"));

CREATE POLICY "individuals can update their own link" ON "public"."link" FOR UPDATE USING (("auth"."uid"() = "user_id")) WITH CHECK (("auth"."uid"() = "user_id"));

ALTER TABLE "public"."link" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."links_stats_log" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "no one can delete links stats log" ON "public"."links_stats_log" FOR DELETE USING (false);

CREATE POLICY "no one can update links stats log" ON "public"."links_stats_log" FOR UPDATE WITH CHECK (false);

REVOKE USAGE ON SCHEMA "public" FROM PUBLIC;
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON FUNCTION "public"."max_link_ordinal"("user_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."max_link_ordinal"("user_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."max_link_ordinal"("user_id" "uuid") TO "service_role";

GRANT ALL ON TABLE "public"."link" TO "anon";
GRANT ALL ON TABLE "public"."link" TO "authenticated";
GRANT ALL ON TABLE "public"."link" TO "service_role";

GRANT ALL ON FUNCTION "public"."update_links_order"("payload" "json") TO "anon";
GRANT ALL ON FUNCTION "public"."update_links_order"("payload" "json") TO "authenticated";
GRANT ALL ON FUNCTION "public"."update_links_order"("payload" "json") TO "service_role";

GRANT ALL ON TABLE "public"."links_stats_log" TO "anon";
GRANT ALL ON TABLE "public"."links_stats_log" TO "authenticated";
GRANT ALL ON TABLE "public"."links_stats_log" TO "service_role";

GRANT ALL ON TABLE "public"."user" TO "anon";
GRANT ALL ON TABLE "public"."user" TO "authenticated";
GRANT ALL ON TABLE "public"."user" TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";

RESET ALL;
