import { Link } from "react-router-dom";
import "./index.scss";

function Button({className, type = "button", size = "medium", children, isTransperent, onClick, to }) {
  const transperency = isTransperent ? "btn--transperent" : "";
  const Component = to ? Link : "button";
  return (
    <Component type={type} onClick={onClick} className={`btn btn--${size} ${transperency} ${className}` } to={to}>
      {children}
    </Component>
  );
}

export default Button;
