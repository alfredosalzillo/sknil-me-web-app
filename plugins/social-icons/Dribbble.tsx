
import SvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

export type DribbbleProps = SvgIconProps;
const Dribbble: React.FC<DribbbleProps> = (props) => (
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
        <path d="M0,0H64V64H0ZM34.3,34.3c-7.7,2.7-10.5,8-10.7,8.5c2.3,1.8,5.2,2.9,8.4,2.9c1.9,0,3.7-0.4,5.3-1.1 C37.1,43.4,36.3,39.2,34.3,34.3C34.4,34.2,34.4,34.3,34.3,34.3z M31.3,27.6c-2.3-4-4.7-7.4-5.1-7.9c-3.8,1.8-6.7,5.3-7.6,9.6 C19.2,29.2,24.9,29.3,31.3,27.6z M33,32.1c0.2-0.1,0.4-0.1,0.5-0.2c-0.3-0.8-0.7-1.6-1.1-2.3c-6.8,2-13.4,2-14,1.9 c0,0.1,0,0.3,0,0.4c0,3.5,1.3,6.7,3.5,9.1C22.2,40.6,25.9,34.4,33,32.1z M41.1,21.8c-2.4-2.1-5.6-3.4-9.1-3.4 c-1.1,0-2.2,0.1-3.2,0.4c0.4,0.5,2.9,3.9,5.1,8C38.8,24.9,40.8,22.1,41.1,21.8z M34.9,28.8c0.3,0.7,0.6,1.3,0.9,2 c0.1,0.2,0.2,0.5,0.3,0.7c4.5-0.6,9.1,0.3,9.5,0.4c0-3.2-1.2-6.2-3.1-8.5C42.3,23.8,40,26.7,34.9,28.8z M37,33.6 c1.8,4.9,2.5,8.9,2.7,9.7c3.1-2.1,5.2-5.4,5.9-9.2C45,34,41.3,32.9,37,33.6z M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16 s7.2-16,16-16s16,7.2,16,16S40.8,48,32,48z" />
      </g>

      <g
        className="social-svg-mask"
        style={{
          transition: 'fill 170ms ease-in-out',
          fill: "#ea4c89"
        }}
      >
        <path d="M34.3,34.3c-7.7,2.7-10.5,8-10.7,8.5c2.3,1.8,5.2,2.9,8.4,2.9c1.9,0,3.7-0.4,5.3-1.1 C37.1,43.4,36.3,39.2,34.3,34.3C34.4,34.2,34.4,34.3,34.3,34.3z M31.3,27.6c-2.3-4-4.7-7.4-5.1-7.9c-3.8,1.8-6.7,5.3-7.6,9.6 C19.2,29.2,24.9,29.3,31.3,27.6z M33,32.1c0.2-0.1,0.4-0.1,0.5-0.2c-0.3-0.8-0.7-1.6-1.1-2.3c-6.8,2-13.4,2-14,1.9 c0,0.1,0,0.3,0,0.4c0,3.5,1.3,6.7,3.5,9.1C22.2,40.6,25.9,34.4,33,32.1z M41.1,21.8c-2.4-2.1-5.6-3.4-9.1-3.4 c-1.1,0-2.2,0.1-3.2,0.4c0.4,0.5,2.9,3.9,5.1,8C38.8,24.9,40.8,22.1,41.1,21.8z M34.9,28.8c0.3,0.7,0.6,1.3,0.9,2 c0.1,0.2,0.2,0.5,0.3,0.7c4.5-0.6,9.1,0.3,9.5,0.4c0-3.2-1.2-6.2-3.1-8.5C42.3,23.8,40,26.7,34.9,28.8z M37,33.6 c1.8,4.9,2.5,8.9,2.7,9.7c3.1-2.1,5.2-5.4,5.9-9.2C45,34,41.3,32.9,37,33.6z M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16 s7.2-16,16-16s16,7.2,16,16S40.8,48,32,48z" />
      </g>
  </SvgIcon>
);

export default Dribbble;
  