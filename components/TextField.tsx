import React from "react";
import clsx from "clsx";

export type TextFieldProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  fullWidth?: boolean
  label?: React.ReactNode
};
const TextField: React.FC<TextFieldProps> = ({
  label,
  id,
  fullWidth = false,
  ...inputProps
}) => {
  return (
    <label
      htmlFor={id}
      className={clsx("block mb-2 text-xl font-medium text-gray-900", {
        "w-full": fullWidth,
      })}
    >
      {label}
      <input
        id={id}
        type="text"
        {...inputProps}
        className="mt-2 border border-gray-800 text-gray-800 text-md rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </label>
  );
};

export default TextField;
