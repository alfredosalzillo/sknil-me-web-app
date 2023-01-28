import React from 'react';
import clsx from 'clsx';

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
  ...inputProps
}) => (
  <label
    htmlFor={id}
    className={clsx('block mb-2 text-xl font-medium text-gray-900', {
      'w-full': fullWidth,
    })}
  >
    {label}
    <input
      id={id}
      type="text"
      {...inputProps}
      className={clsx('mt-2 border border-gray-800 text-gray-800 text-md rounded-sm focus:ring-emerald-700 focus:border-emerald-700 block w-full p-2.5', {
        'border-red-700': error,
      })}
    />
    {helperText && (
      <div className={clsx('mt-2 text-sm font-light', {
        'text-red-700': error,
      })}
      >
        {helperText}
      </div>
    )}
  </label>
);

export default TextField;
