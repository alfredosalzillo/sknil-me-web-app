import Link from 'next/link';

import classes from './Navbar.module.scss';

import Logo from '@/components/Logo';

const Navbar = () => (
  <nav className={classes.root}>
    <div className={classes.container}>
      <Logo />
      <ul className={classes.menu}>
        <li>
          <Link
            href="/sign-in"
            className={classes.link}
          >
            Sign In
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
