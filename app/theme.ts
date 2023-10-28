import createTheme from '@mui/material/styles/createTheme';
import responsiveFontSizes from '@mui/material/styles/responsiveFontSizes';
import NextLink from 'next/link';
import React from 'react';

const Link = React
  .forwardRef((props, ref) => React
    .createElement(NextLink, {
      // @ts-ignore
      ref,
      ...props,
    }));

const theme = responsiveFontSizes(createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: Link,
        underline: 'hover',
      },
    },
  },
}));

export default theme;
