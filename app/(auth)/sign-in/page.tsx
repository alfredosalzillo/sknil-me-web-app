import Logo from '@/components/Logo';
import SignInForm from '@/features/auth/SignInForm';

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
