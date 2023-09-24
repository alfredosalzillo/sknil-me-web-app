'use client';

import React, { useEffect, useRef, useState } from 'react';
import type { ContainerProps } from '@mui/material/Container';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import previewDevice from '@/assets/preview-device.svg';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

export type LinksPreviewProps = {
  username: string;
  deps?: unknown[];
} & ContainerProps;
const LinksPreview: React.FC<LinksPreviewProps> = ({ username, deps = [], ...props }) => {
  const [loading, setLoading] = useState(true);
  const iframe = useRef<HTMLIFrameElement>(null);
  const refresh = () => {
    if (iframe.current) {
      iframe.current.contentWindow?.postMessage('refresh', '*');
    }
  };
  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return (
    <Container
      {...props}
      sx={{
        position: 'sticky',
        top: (theme) => `calc(${theme.mixins.toolbar.minHeight}px + ${theme.spacing(2)})`,
      }}
    >
      <Toolbar component={Paper} elevation={1} sx={{ mb: 4 }}>
        <Grid container spacing={2} justifyContent="flex-end" alignItems="center">
          <Grid item xs>
            <Typography variant="h6" component="h2">
              Preview
            </Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={refresh}>
              <RefreshIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
      <Container
        sx={{
          width: 380,
          height: 'min(60vh, 844px)',
          position: 'relative',
        }}
      >
        <iframe
          ref={iframe}
          title="Links preview"
          src={`/l/${username}?preview=true`}
          style={{
            paddingTop: '20px',
            width: '250px',
            height: 'calc(100% - 20px)',
            border: 'none',
            margin: 'auto',
            display: 'block',
            position: 'relative',
          }}
          onLoad={() => setLoading(false)}
        />
        {loading && (
          <CircularProgress
            sx={{
              position: 'absolute',
              top: 'calc(50% - 20px)',
              left: 'calc(50% - 20px)',
            }}
          />
        )}
        <Image
          src={previewDevice}
          alt="preview device"
          fill
          style={{
            pointerEvents: 'none',
          }}
        />
      </Container>
    </Container>
  );
};

export default LinksPreview;
