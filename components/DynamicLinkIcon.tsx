import React from 'react';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import * as Icons from '@/plugins/social-icons/next';
import networkFor from '@/plugins/social-icons/utils/networkFor';
import dynamic from 'next/dynamic';

const LinkIcon = dynamic(() => import('@mui/icons-material/Link'), {
  ssr: true,
});

export type DynamicLinkIconProps = SvgIconProps & {
  url: string;
  fallback?: React.ReactNode;
};
const DynamicLinkIcon: React.FC<DynamicLinkIconProps> = ({
  url,
  fallback = <LinkIcon />,
  ...props
}) => {
  const name = networkFor(url);
  if (!name) return fallback;
  if (!(name in Icons)) return fallback;
  // @ts-ignore
  const Icon = Icons[name];
  return <Icon {...props} />;
};

export default DynamicLinkIcon;
