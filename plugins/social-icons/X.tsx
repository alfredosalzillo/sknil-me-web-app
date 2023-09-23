
import SvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

export type XProps = SvgIconProps;
const X: React.FC<XProps> = (props) => (
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
        <path d="M0,0H64V64H0ZM 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 16 17.537109 L 26.125 17.537109 L 33.117188 26.779297 L 41.201172 17.537109 L 46.109375 17.537109 L 35.388672 29.789062 L 48 46.462891 L 38.125 46.462891 L 30.390625 36.351562 L 21.541016 46.462891 L 16.632812 46.462891 L 28.097656 33.357422 L 16 17.537109 z M 21.730469 20.320312 L 39.480469 43.525391 L 42.199219 43.525391 L 24.648438 20.320312 L 21.730469 20.320312 z " />
      </g>

      <g
        className="social-svg-mask"
        style={{
          transition: 'fill 170ms ease-in-out',
          fill: "#000000"
        }}
      >
        <path d="M 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 16 17.537109 L 26.125 17.537109 L 33.117188 26.779297 L 41.201172 17.537109 L 46.109375 17.537109 L 35.388672 29.789062 L 48 46.462891 L 38.125 46.462891 L 30.390625 36.351562 L 21.541016 46.462891 L 16.632812 46.462891 L 28.097656 33.357422 L 16 17.537109 z M 21.730469 20.320312 L 39.480469 43.525391 L 42.199219 43.525391 L 24.648438 20.320312 L 21.730469 20.320312 z " />
      </g>
  </SvgIcon>
);

export default X;
  