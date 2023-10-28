import AppBar from '@mui/material/AppBar';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from 'next/link';

const LandingsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>
    <AppBar position="absolute" variant="outlined" sx={{ border: 0 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link href="/" underline="none" color="inherit" variant="h6">
          sknil.me
        </Link>
        <Box>
          <Button variant="outlined" component={NextLink} href="/dashboard">
            Dashboard
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
    {children}
  </div>
);

export default LandingsLayout;
