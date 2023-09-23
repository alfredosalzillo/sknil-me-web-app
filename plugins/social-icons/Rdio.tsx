
import SvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

export type RdioProps = SvgIconProps;
const Rdio: React.FC<RdioProps> = (props) => (
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
        <path d="M0,0H64V64H0ZM0,0v64h64V0H0z M43.9,30.5c0.1,0.5,0.1,1,0.1,1.5V32c0,6.4-5.1,11.6-12,11.6c-6.9,0-12-5.1-12-11.5V32 c0-6.4,5.1-11.6,12-11.6c1.2,0,2.3,0.2,3.4,0.5v6.8c-0.2-0.1-0.4-0.2-0.6-0.3c-3-1-6.2,0.4-7.7,2.9l0,0.1c-1.5,2.5-0.8,5.3,2.1,6.3 c3,1,6.2-0.4,7.7-2.9l0-0.1c0.5-0.8,0.8-1.7,0.8-2.6h0v-9.3c0.2,0.1,0.3,0.2,0.5,0.3c0.1,0.1,0.3,0.2,0.4,0.2c1.5,1,5.4,3.5,8.7,3.4 C49,25.8,47.5,29.5,43.9,30.5z" />
      </g>

      <g
        className="social-svg-mask"
        style={{
          transition: 'fill 170ms ease-in-out',
          fill: "#0475C5"
        }}
      >
        <path d="M0,0v64h64V0H0z M43.9,30.5c0.1,0.5,0.1,1,0.1,1.5V32c0,6.4-5.1,11.6-12,11.6c-6.9,0-12-5.1-12-11.5V32 c0-6.4,5.1-11.6,12-11.6c1.2,0,2.3,0.2,3.4,0.5v6.8c-0.2-0.1-0.4-0.2-0.6-0.3c-3-1-6.2,0.4-7.7,2.9l0,0.1c-1.5,2.5-0.8,5.3,2.1,6.3 c3,1,6.2-0.4,7.7-2.9l0-0.1c0.5-0.8,0.8-1.7,0.8-2.6h0v-9.3c0.2,0.1,0.3,0.2,0.5,0.3c0.1,0.1,0.3,0.2,0.4,0.2c1.5,1,5.4,3.5,8.7,3.4 C49,25.8,47.5,29.5,43.9,30.5z" />
      </g>
  </SvgIcon>
);

export default Rdio;
  