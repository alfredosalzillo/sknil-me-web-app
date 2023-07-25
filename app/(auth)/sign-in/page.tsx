import classes from './page.module.scss';

import Logo from '@/components/Logo';
import SignInForm from '@/features/auth/SignInForm';

const SignIn = () => (
  <main className={classes.root}>
    <div className={classes.content}>
      <nav className={classes.header}>
        <Logo />
      </nav>
      <div className={classes.main}>
        <SignInForm className={classes.form} />
      </div>
    </div>
    <div className={classes.leader} />
  </main>
);

export default SignIn;
