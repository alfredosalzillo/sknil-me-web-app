
import SvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

export type StackoverflowProps = SvgIconProps;
const Stackoverflow: React.FC<StackoverflowProps> = (props) => (
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
        <path d="M0,0H64V64H0ZM64 0V64H0V0H64ZM46.1451 37.2649H42.7989V47.3034H19.3758V37.2649H16.0297V50.6495H46.1451V37.2649ZM39.4566 39.7243L23.0225 36.2702L23.7133 32.9834L40.1475 36.439L39.4566 39.7243ZM40.4209 35.4912L25.1972 28.401L26.615 25.3563L41.8391 32.4465L40.4209 35.4912ZM42.3161 31.6796L29.4097 20.932L31.5591 18.3512L44.4655 29.0985L42.3161 31.6796ZM35.0455 14.9923L37.7407 12.9877L47.7633 26.4638L45.0681 28.4682L35.0455 14.9923ZM39.4527 43.9572H22.7219V40.6111H39.4527V43.9572Z" />
      </g>

      <g
        className="social-svg-mask"
        style={{
          transition: 'fill 170ms ease-in-out',
          fill: "#ed803d"
        }}
      >
        <path d="M64 0V64H0V0H64ZM46.1451 37.2649H42.7989V47.3034H19.3758V37.2649H16.0297V50.6495H46.1451V37.2649ZM39.4566 39.7243L23.0225 36.2702L23.7133 32.9834L40.1475 36.439L39.4566 39.7243ZM40.4209 35.4912L25.1972 28.401L26.615 25.3563L41.8391 32.4465L40.4209 35.4912ZM42.3161 31.6796L29.4097 20.932L31.5591 18.3512L44.4655 29.0985L42.3161 31.6796ZM35.0455 14.9923L37.7407 12.9877L47.7633 26.4638L45.0681 28.4682L35.0455 14.9923ZM39.4527 43.9572H22.7219V40.6111H39.4527V43.9572Z" />
      </g>
  </SvgIcon>
);

export default Stackoverflow;
  