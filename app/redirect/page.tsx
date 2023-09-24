import getServerClient from '@/plugins/api/get-server-client';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

type RedirectPageProps = {
  searchParams: {
    link_id: string;
    url: string;
  }
};
const RedirectPage = async (props: RedirectPageProps) => {
  const client = getServerClient();
  const { error } = await client.from('links_stats_log').insert({
    link_id: props.searchParams.link_id,
    action: 'visit',
    user_agent: headers().get('user-agent'),
    ip: headers().get('x-forwarded-for'),
    referrer: headers().get('referer'),
  });
  if (error) {
    console.error(error);
  }
  redirect(props.searchParams.url);
};

export default RedirectPage;
