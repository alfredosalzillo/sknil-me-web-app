import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DynamicLinkIcon from '@/components/DynamicLinkIcon';
import Link from '@mui/material/Link';
import React from 'react';

export type LinksViewProps = {
  username: string;
  links: Array<{
    id: string;
    name: string;
    url: string;
  }>
};
const LinksView: React.FC<LinksViewProps> = ({ username, links }) => (
  <Grid container direction="column" sx={{ minHeight: '100%', overflow: 'auto' }} spacing={4}>
    <Grid item>
      <Typography variant="h6" component="h1" gutterBottom align="center">
        @
        {username}
      </Typography>
    </Grid>
    <Grid item xs>
      <Grid container spacing={2}>
        {links.map((link) => (
          <Grid item xs={12} key={link.id}>
            <Button
              href={`/redirect?link_id=${link.id}&url=${encodeURIComponent(link.url)}`}
              rel="noopener noreferrer"
              variant="outlined"
              fullWidth
              startIcon={<DynamicLinkIcon url={link.url} />}
              component="a"
            >
              {link.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
    <Grid item>
      <Typography
        variant="body2"
        align="center"
      >
        <Link href="/">
          sknil.me
        </Link>
      </Typography>
    </Grid>
  </Grid>
);

export default LinksView;
