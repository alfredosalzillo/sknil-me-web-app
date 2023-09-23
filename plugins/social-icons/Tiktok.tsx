
import SvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

export type TiktokProps = SvgIconProps;
const Tiktok: React.FC<TiktokProps> = (props) => (
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
        <path d="M0,0H64V64H0ZM 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 32.78125 16 L 38.275391 16 C 38.266721 16 38.210919 16.525885 38.349609 17.339844 L 38.341797 17.339844 C 38.507788 18.320459 38.959422 19.720964 40.166016 21.101562 A 8.8574793 8.8575582 0 0 0 41.783203 22.476562 A 7.2842381 7.2843028 0 0 0 42.414062 22.84375 C 43.819312 23.544381 45.19123 23.756924 45.867188 23.683594 L 45.867188 29.140625 C 45.867188 29.140625 43.937775 29.059668 42.505859 28.679688 C 40.509978 28.145715 39.230469 27.326172 39.230469 27.326172 C 39.230469 27.326172 38.342051 26.739219 38.275391 26.699219 L 38.275391 37.972656 C 38.275391 38.599293 38.110585 40.16734 37.613281 41.474609 A 10.563379 10.563472 0 0 1 35.769531 44.537109 C 35.769531 44.537109 34.543209 46.057509 32.388672 47.078125 C 30.446121 47.998744 28.737199 47.977377 28.226562 47.998047 C 28.226563 47.998047 25.275743 48.116502 22.615234 46.308594 L 22.601562 46.294922 L 22.601562 46.308594 A 11.168009 11.168108 0 0 1 20.220703 44.0625 C 19.378754 42.988556 18.86184 41.71511 18.728516 41.341797 L 18.728516 41.328125 C 18.516528 40.694159 18.072012 39.16028 18.138672 37.679688 C 18.244666 35.071156 19.121529 33.464433 19.353516 33.064453 A 10.785366 10.785461 0 0 1 21.705078 30.162109 A 10.208733 10.208824 0 0 1 29.572266 27.861328 L 29.566406 33.457031 A 4.5930634 4.5931041 0 0 0 28.138672 33.230469 C 25.578158 33.230469 23.501953 35.319903 23.501953 37.898438 C 23.501953 40.476973 25.578158 42.564453 28.138672 42.564453 A 4.5863967 4.5864374 0 0 0 30.412109 41.964844 A 4.6663919 4.6664333 0 0 0 32.759766 38.259766 L 32.759766 38.248047 C 32.763066 38.232047 32.763672 38.216512 32.763672 38.201172 C 32.765672 38.163839 32.769531 38.132316 32.769531 38.097656 C 32.781531 37.819002 32.78125 37.535319 32.78125 37.25 L 32.78125 16 z " />
      </g>

      <g
        className="social-svg-mask"
        style={{
          transition: 'fill 170ms ease-in-out',
          fill: "#000000"
        }}
      >
        <path d="M 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 32.78125 16 L 38.275391 16 C 38.266721 16 38.210919 16.525885 38.349609 17.339844 L 38.341797 17.339844 C 38.507788 18.320459 38.959422 19.720964 40.166016 21.101562 A 8.8574793 8.8575582 0 0 0 41.783203 22.476562 A 7.2842381 7.2843028 0 0 0 42.414062 22.84375 C 43.819312 23.544381 45.19123 23.756924 45.867188 23.683594 L 45.867188 29.140625 C 45.867188 29.140625 43.937775 29.059668 42.505859 28.679688 C 40.509978 28.145715 39.230469 27.326172 39.230469 27.326172 C 39.230469 27.326172 38.342051 26.739219 38.275391 26.699219 L 38.275391 37.972656 C 38.275391 38.599293 38.110585 40.16734 37.613281 41.474609 A 10.563379 10.563472 0 0 1 35.769531 44.537109 C 35.769531 44.537109 34.543209 46.057509 32.388672 47.078125 C 30.446121 47.998744 28.737199 47.977377 28.226562 47.998047 C 28.226563 47.998047 25.275743 48.116502 22.615234 46.308594 L 22.601562 46.294922 L 22.601562 46.308594 A 11.168009 11.168108 0 0 1 20.220703 44.0625 C 19.378754 42.988556 18.86184 41.71511 18.728516 41.341797 L 18.728516 41.328125 C 18.516528 40.694159 18.072012 39.16028 18.138672 37.679688 C 18.244666 35.071156 19.121529 33.464433 19.353516 33.064453 A 10.785366 10.785461 0 0 1 21.705078 30.162109 A 10.208733 10.208824 0 0 1 29.572266 27.861328 L 29.566406 33.457031 A 4.5930634 4.5931041 0 0 0 28.138672 33.230469 C 25.578158 33.230469 23.501953 35.319903 23.501953 37.898438 C 23.501953 40.476973 25.578158 42.564453 28.138672 42.564453 A 4.5863967 4.5864374 0 0 0 30.412109 41.964844 A 4.6663919 4.6664333 0 0 0 32.759766 38.259766 L 32.759766 38.248047 C 32.763066 38.232047 32.763672 38.216512 32.763672 38.201172 C 32.765672 38.163839 32.769531 38.132316 32.769531 38.097656 C 32.781531 37.819002 32.78125 37.535319 32.78125 37.25 L 32.78125 16 z " />
      </g>
  </SvgIcon>
);

export default Tiktok;
  