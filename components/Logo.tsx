import Link from 'next/link';

import classes from './Logo.module.scss';

const Logo = () => (
  <Link
    className={classes.root}
    href="/"
  >
    sknil | me
  </Link>
);
export default Logo;
