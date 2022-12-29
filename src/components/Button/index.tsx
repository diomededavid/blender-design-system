import React from "react";
import classNames from "classnames";

export interface ButtonProps {
  /**
   * What background color to use
   */
  color?:
    | "accent"
    | "disabled"
    | "error"
    | "ghost"
    | "info"
    | "primary"
    | "secondary"
    | "warning";

  /**
   * ID of component
   */
  id?: string;

  /**
   * Outline button
   */
  outline?: boolean;

  /**
   * Wide button
   */
  wide?: boolean;
  /**
   * Button contents
   */

  label: string;
  /**
   * Optional click handler
   */
  handleClick?: () => void;

  /**
   * How large should the button be
   */
  size?: "xs" | "sm" | "lg";
}

/**
 * Primary UI component for user interaction
 */
export const Button = (props: ButtonProps) => {
  const { size, color, handleClick, id, label, outline, wide } = props;

  return (
    <button
      aria-disabled={color === "disabled" && "true"}
      className={classNames(
        "btn",
        { [`btn-${color}`]: true },
        { [`btn-${size}`]: true },
        outline ? "btn-outline" : "",
        wide ? "btn-wide" : "",
      )}
      id={id}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
