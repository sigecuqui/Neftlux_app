import { Link } from "react-router-dom";
import cx from "classnames";

import "./index.scss";

function Button({
  className,
  type = "button",
  size = "medium",
  children,
  isTransperent,
  onClick,
  to,
}) {
  const classNames = cx("btn", `btn--${size}`, className, {
    "btn--transperent": isTransperent,
  });

  const Component = to ? Link : "button";

  return (
    <Component type={type} onClick={onClick} className={classNames} to={to}>
      {children}
    </Component>
  );
}

export default Button;