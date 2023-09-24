import React from 'react';
import dynamic from 'next/dynamic';
import type { SvgIconProps } from '@mui/material/SvgIcon';

const LinkIcon = dynamic(() => import('@mui/icons-material/Link'), { ssr: true, });
const InstagramIcon = dynamic(() => import('@mui/icons-material/Instagram'), { ssr: true, });
const FacebookIcon = dynamic(() => import('@mui/icons-material/Facebook'), { ssr: true, });
const GoogleIcon = dynamic(() => import('@mui/icons-material/Google'), { ssr: true, });
const YouTubeIcon = dynamic(() => import('@mui/icons-material/YouTube'), { ssr: true, });
const PinterestIcon = dynamic(() => import('@mui/icons-material/Pinterest'), { ssr: true, });
const GitHubIcon = dynamic(() => import('@mui/icons-material/GitHub'), { ssr: true, });
const TwitterIcon = dynamic(() => import('@mui/icons-material/Twitter'), { ssr: true, });

export type DynamicLinkIconProps = SvgIconProps & {
  url: string;
  fallback?: React.ReactNode;
};
const DynamicLinkIcon: React.FC<DynamicLinkIconProps> = ({
  url,
  fallback = <LinkIcon />,
  ...props
}) => {
  if (!url) return fallback;
  if (url.match(/instagram\.com/)) return <InstagramIcon {...props} />;
  if (url.match(/facebook\.com/)) return <FacebookIcon {...props} />;
  if (url.match(/google\.com/)) return <GoogleIcon {...props} />;
  if (url.match(/youtube\.com/)) return <YouTubeIcon {...props} />;
  if (url.match(/pinterest\.com/)) return <PinterestIcon {...props} />;
  if (url.match(/github\.com/)) return <GitHubIcon {...props} />;
  if (url.match(/twitter\.com/)) return <TwitterIcon {...props} />;
  return fallback;
};

export default DynamicLinkIcon;
