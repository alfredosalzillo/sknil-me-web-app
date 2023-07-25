import React from 'react';
import clsx from 'clsx';

import classes from './Button.module.scss';

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  fullWidth?: boolean
}
const Button: React.FC<ButtonProps> = ({
  fullWidth = false,
  children,
  disabled,
  ...props
}) => (
  <button
    type="button"
    {...props}
    disabled={disabled}
    className={clsx(
      classes.root,
      {
        [classes.fullWidth]: fullWidth,
        [classes.disabled]: disabled,
      },
    )}
  >
    {children}
  </button>
);

export default Button;
