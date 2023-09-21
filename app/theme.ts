import { createTheme } from '@mui/material';
import NextLink from 'next/link';
import React from 'react';

const Link = React
  .forwardRef((props, ref) => React
    .createElement(NextLink, {
      // @ts-ignore
      ref,
      ...props,
    }));

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: 'var(--roboto-font-family)',
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: Link,
      },
    },
  },
});

export default theme;
