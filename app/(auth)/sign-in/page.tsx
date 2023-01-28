import Link from 'next/link';

import Logo from '@/components/Logo';
import TextField from '@/components/TextField';
import Button from '@/components/Button';

const SignInForm = () => (
  <form className="w-10/12 max-w-lg" name="sign-in" id="sign-in">
    <div className="w-full flex flex-col gap-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Login to your sknil.me
      </h1>
      <div className="flex flex-col gap-4">
        <TextField
          id="email"
          name="email"
          type="text"
          label="Email"
          placeholder="example@email.com"
        />
        <TextField
          id="password"
          name="password"
          type="password"
          label="Password"
        />
      </div>
      <div className="flex flex-row-reverse">
        <Button type="submit" fullWidth>
          Sign In
        </Button>
      </div>
      <div className="text-center">
        <Link href="/forgot-password">
          Forgot password?
        </Link>
      </div>
      <div className="text-center">
        Don&apos;t have an account?
        {' '}
        <Link href="/sign-up">Sign up</Link>
      </div>
    </div>
  </form>
);

const SignIn = () => (
  <div className="w-full h-full flex">
    <div className="w-full md:w-7/12 h-full bg-gray-100 p-10 flex flex-col">
      <nav className="w-full">
        <Logo />
      </nav>
      <div className="w-full flex flex-row p-4 flex-1 items-center justify-center">
        <SignInForm />
      </div>
    </div>
    <div className="w-5/12 h-full hidden md:block bg-black" />
  </div>
);

export default SignIn;
