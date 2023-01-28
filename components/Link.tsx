import NextLink from 'next/link';
import React from 'react';
import clsx from 'clsx';

export type LinkProps = React.ComponentProps<typeof NextLink>
const Link: React.FC<LinkProps> = ({ className, ...props }) => (
  <NextLink {...props} className={clsx('text-emerald-700 underline hover:text-emerald-500', className)} />
);

export default Link;
