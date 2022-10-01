import React from "react";

interface BadgeProps {
  /**
   * What background color to use
   */
  color?: "badge-primary" | "badge-secondary" | "badge-accent" | "badge-ghost";
  /**
   * How large should the button be?
   */
  size?: "badge-xs" | "badge-sm" | "badge-md" | "badge-lg";

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
export const Badge = ({size, color, label, ...props}: BadgeProps) => {
  return (
    <button type="button" className={`badge ${color} ${size}`} {...props}>
      {label}
    </button>
  );
};
