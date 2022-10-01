// import {Button} from "../Button";

interface CardProps {
  /**
   * Accept children components
   */

  children?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Card = ({children}: CardProps) => (
  <div className="card w-96 white shadow">
    <div className="card-body">{children}</div>
  </div>
);

export default Card;
