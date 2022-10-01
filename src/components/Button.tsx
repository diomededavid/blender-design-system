import * as React from "react";
type ButtonStyle = {
  [property: string]: string;
}
export interface ButtonProps {
  label: string;
  style: ButtonStyle;
  onClick: () => void;
}
const Button: React.FunctionComponent<ButtonProps> = ({ label, style, onClick }) => {
  return (

    <div>
    <button className="btn btn-primary">One</button>
    </div>  
  );
};
export default Button;
