
import SvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

export type DeveloperMozillaProps = SvgIconProps;
const DeveloperMozilla: React.FC<DeveloperMozillaProps> = (props) => (
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
        <path d="M0,0H64V64H0ZM27.69 12.93 15.85 51.07H11l11.8-38.14h4.89Zm4.31 0v38.14h-4.31V12.93H32Zm16.69 0-11.8 38.15h-4.85l11.81-38.15h4.85Zm4.31 0v38.14h-4.31V12.93H53Z" />
      </g>

      <g
        className="social-svg-mask"
        style={{
          transition: 'fill 170ms ease-in-out',
          fill: "#236ab4"
        }}
      >
        <path d="M27.69 12.93 15.85 51.07H11l11.8-38.14h4.89Zm4.31 0v38.14h-4.31V12.93H32Zm16.69 0-11.8 38.15h-4.85l11.81-38.15h4.85Zm4.31 0v38.14h-4.31V12.93H53Z" />
      </g>
  </SvgIcon>
);

export default DeveloperMozilla;
  