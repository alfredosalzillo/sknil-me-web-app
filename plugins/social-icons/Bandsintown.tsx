
import SvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

export type BandsintownProps = SvgIconProps;
const Bandsintown: React.FC<BandsintownProps> = (props) => (
  <SvgIcon
    role="img"
    aria-label="bandsintown social icon"
    viewBox="0 0 64 64"
    {...props}
  >
      <g
        className="social-svg-icon"
        style={{
          transition: 'fill 170ms ease-in-out',
          fill: 'transparent'
        }}
      >
        <path d="M0,0H64V64H0ZM0,0v64h64V0H0z M32.6,24.7h5.6v7.8h-5.6V24.7z M25.8,24.7h5.6v7.8h-5.6V24.7z M44.9,46H19.1V18h5.6v22.4h14.6 v-1.1H25.8v-5.6h19V46z M44.9,32.6h-5.6V18h5.6V32.6z" />
      </g>

      <g
        className="social-svg-mask"
        style={{
          transition: 'fill 170ms ease-in-out',
          fill: "#1B8793"
        }}
      >
        <path d="M0,0v64h64V0H0z M32.6,24.7h5.6v7.8h-5.6V24.7z M25.8,24.7h5.6v7.8h-5.6V24.7z M44.9,46H19.1V18h5.6v22.4h14.6 v-1.1H25.8v-5.6h19V46z M44.9,32.6h-5.6V18h5.6V32.6z" />
      </g>
  </SvgIcon>
);

export default Bandsintown;
  