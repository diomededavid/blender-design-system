import classNames from "classnames";

export interface ButtonProps {
  active?: boolean;
  /**
   * Optional. Sets color What background color to use
   */
  color?: "accent" | "disabled" | "primary" | "secondary" | "ghost" | "link";

  colorState?: "info" | "error" | "success" | "warning";
  
  /**
   * ID of component
   */
  id?: string;

  /**
   * Outline button
   */
  outline?: boolean;

  /**
   * Optional. Specifies the type of button.
   */
  buttonType?: "button" | "reset" | "submit";

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
   * Optional.  Size of button
   */
  size?: "xs" | "sm" | "lg";
}

/**
 * Primary UI component for user interaction
 */
export const Button = (props: ButtonProps) => {
  const {
    active,
    color,
    handleClick,
    id,
    label,
    outline,
    size,
    buttonType,
    wide,
  } = props;

  return (
    <button
      className={classNames(
        "btn",
        active && "btn-active",
        { [`btn-${color}`]: true },
        { [`btn-${size}`]: true },
        outline && "btn-outline",
        wide && "btn-wide",
      )}
      aria-disabled={color === "disabled" && "true"}
      id={id}
      onClick={handleClick}
      type={buttonType}
    >
      {label}
    </button>
  );
};

export default Button;
