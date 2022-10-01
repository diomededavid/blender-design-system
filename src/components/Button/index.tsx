import React from "react";

interface ButtonProps {
  /**
   * What background color to use
   */
  color?: "btn-primary" | "btn-secondary" | "btn-accent" | "btn-ghost";
  /**
   * How large should the button be?
   */
  size?: "btn-xs" | "btn-sm" | "btn" | "btn-lg";

  /**
   * Outline button
   */
  isOutline?: boolean;

  /**
   * Wide button
   */
  isWide?: boolean;
  /**
   * Button contents
   */

  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   * Optional class
   */
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size,
  color,
  label,
  isOutline,
  isWide,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`btn ${isOutline && "btn-outline"} ${color} ${size} ${
        isWide && "btn-wide"
      }`}
      {...props}
    >
      {label}
    </button>
  );
};
