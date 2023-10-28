import React from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';
import Paper from '@mui/material/Paper';
import NextLink from 'next/link';
import Box from '@mui/material/Box';
import LinksView from '@/components/LinksView';

type SectionProps = {
  children: React.ReactNode;
};
const Section: React.FC<SectionProps> = ({ children }) => (
  <Stack
    direction="column"
    alignContent="center"
    justifyContent="center"
    width="100%"
    minHeight="100dvh"
  >
    <Container maxWidth={false}>
      {children}
    </Container>
  </Stack>
);

const Hero = () => (
  <Section>
    <Hidden mdUp>
      <Toolbar />
    </Hidden>
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Stack direction="column" justifyContent="center" height="100%" sx={{ p: 2 }}>
          <Typography variant="h1" fontWeight="bold">
            Simply You, all in one link.
          </Typography>
          <Typography variant="body1" sx={{ textWrap: 'balance' }}>
            Start simplifying your life today using
            {' '}
            <strong>Sknil-me</strong>
            .
            {' '}
            <br />
            Your
            {' '}
            <strong>Instagram</strong>
            ,
            {' '}
            <strong>TikTok</strong>
            ,
            {' '}
            <strong>Youtube</strong>
            ,
            {' '}
            <strong>Twitch</strong>
            {' '}
            and
            {' '}
            <strong>X</strong>
            {' '}
            all in one link to share in your
            {' '}
            <strong>bio</strong>
            .
          </Typography>
          <Box mt={2}>
            <Button size="large" variant="outlined" component={NextLink} href="/dashboard">
              Get Started
            </Button>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} position="relative">
        <Box position="relative" width={390 * 0.6} height={844 * 0.6} margin="auto" mb={4}>
          <Box
            position="absolute"
            top="25%"
            left="50%"
            width={250}
            height={60}
            borderRadius={100}
            sx={{ background: 'rgb(210, 232, 35)', transform: 'translateX(-70%)' }}
          />
          <Box
            position="absolute"
            top="45%"
            left="50%"
            width={250}
            height={60}
            borderRadius={100}
            sx={{ background: 'rgb(80, 34, 116)', transform: 'translateX(-30%)' }}
          />
          <Box
            position="absolute"
            top="65%"
            left="50%"
            width={250}
            height={60}
            borderRadius={100}
            sx={{ background: 'rgb(233, 192, 233)', transform: 'translateX(-60%)' }}
          />
          <Paper
            sx={{
              objectFit: 'contain',
              transform: 'scale(0.6)',
              transformOrigin: 'top left',
              pointerEvents: 'none',
              width: 390,
              height: 844,
              mb: 4,
              p: 4,
              borderRadius: 8,
              border: '12px solid black',
            }}
          >
            <LinksView
              username="you"
              links={[{
                id: '1',
                name: 'Instagram',
                url: 'https://instagram.com',
              }, {
                id: '2',
                name: 'TikTok',
                url: 'https://tiktok.com',
              }, {
                id: '3',
                name: 'Youtube',
                url: 'https://youtube.com',
              }, {
                id: '4',
                name: 'Twitch',
                url: 'https://twitch.tv',
              }]}
            />
          </Paper>
        </Box>
      </Grid>
    </Grid>
  </Section>
);

const Home = () => (
  <main>
    <Hero />
  </main>
);
export default Home;
