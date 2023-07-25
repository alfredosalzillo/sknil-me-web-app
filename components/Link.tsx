import NextLink from 'next/link';
import React from 'react';
import clsx from 'clsx';

import classes from './Link.module.scss';

export type LinkProps = React.ComponentProps<typeof NextLink>
const Link: React.FC<LinkProps> = ({ className, ...props }) => (
  <NextLink {...props} className={clsx(classes.root, className)} />
);

export default Link;
