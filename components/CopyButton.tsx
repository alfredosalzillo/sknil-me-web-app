'use client';

import CopyIcon from '@mui/icons-material/CopyAll';
import CopiedIcon from '@mui/icons-material/Done';
import type { IconButtonProps } from '@mui/material/IconButton';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';

export type CopyButtonProps = {
  value: string;
} & Omit<IconButtonProps, 'children' | 'onClick'>;
const CopyButton: React.FC<CopyButtonProps> = ({ value, ...props }) => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  return (
    <IconButton {...props} onClick={copy}>
      {copied
        ? <CopiedIcon />
        : <CopyIcon />}
    </IconButton>
  );
};

export default CopyButton;
