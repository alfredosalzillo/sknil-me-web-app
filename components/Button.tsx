import React from "react";
import clsx from "clsx";

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  fullWidth?: boolean
}
const Button: React.FC<ButtonProps> = ({
  fullWidth = false,
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      {...props}
      className={clsx(
        "p-2 bg-gray-200 border-2 border-gray-800 rounded-sm text-gray-900 font-medium",
        {
          "w-full": fullWidth,
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
