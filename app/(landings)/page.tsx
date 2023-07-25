import supabase from '@/plugins/supabase/server';

const Home = async () => {
  console.log(await supabase.auth.getSession());
  return (
    <main>
      <h1>Hello, Next.js!</h1>
    </main>
  );
};

export default Home;
