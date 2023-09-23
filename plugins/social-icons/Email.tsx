
import SvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

export type EmailProps = SvgIconProps;
const Email: React.FC<EmailProps> = (props) => (
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
        <path d="M0,0H64V64H0ZM41.1,25H22.9l9.1,7.1L41.1,25z M44,26.6l-12,9.3l-12-9.3V39h24V26.6z M0,0v64h64V0H0z M47,42H17V22h30V42z" />
      </g>

      <g
        className="social-svg-mask"
        style={{
          transition: 'fill 170ms ease-in-out',
          fill: "#7f7f7f"
        }}
      >
        <path d="M41.1,25H22.9l9.1,7.1L41.1,25z M44,26.6l-12,9.3l-12-9.3V39h24V26.6z M0,0v64h64V0H0z M47,42H17V22h30V42z" />
      </g>
  </SvgIcon>
);

export default Email;
  