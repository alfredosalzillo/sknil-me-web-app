import React from 'react';
import clsx from 'clsx';

import classes from './TextField.module.scss';

export type TextFieldProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  fullWidth?: boolean
  label?: React.ReactNode
  helperText?: React.ReactNode
  error?: boolean
};
const TextField: React.FC<TextFieldProps> = ({
  label,
  id,
  fullWidth = false,
  error = false,
  helperText,
  required,
  ...inputProps
}) => (
  <label
    htmlFor={id}
    className={clsx(classes.root, {
      [classes.fullWidth]: fullWidth,
    })}
  >
    {label}
    {required && '*'}
    <input
      id={id}
      type="text"
      {...inputProps}
      className={clsx(classes.input, {
        [classes.error]: error,
      })}
    />
    {helperText && (
      <div className={clsx(classes.helperText, {
        [classes.error]: error,
      })}
      >
        {helperText}
      </div>
    )}
  </label>
);

export default TextField;
