import { createServerComponentClient } from '@/plugins/supabase/server';

const Home = async () => {
  const apiClient = createServerComponentClient();
  console.log(await apiClient.auth.getSession());
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
    </main>
  );
};

export default Home;
