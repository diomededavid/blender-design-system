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
   * How large should the button be?
   */
  size?: "xs" | "sm" | "lg";

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
  handleClick?: onClick? : React.MouseEventHandler ;
}

/**
 * Primary UI component for user interaction
 */
export const Button = (props: ButtonProps) => {
  const { size, color, handleClick, label, outline, wide } = props;

  return (
    <button
      aria-disabled={color === "disabled" ? "true" : "false"}
      className={classNames(
        "btn",
        { [`btn-${color}`]: true },
        { [`btn-${size}`]: true },
        outline ? "btn-outline" : "",
        wide ? "btn-wide" : "",
      )}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
