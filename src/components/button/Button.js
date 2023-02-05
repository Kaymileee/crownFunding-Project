import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  kind = "",
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-8 h-8 border-4 rounded-full border-t-transparent animate-spin border-b-transparent"></div>
  ) : (
    children
  );
  let defaultClassName =
    "py-4 text-base font-semibold rounded-xl  flex justify-center items-center  min-h-[56px]";
  switch (kind) {
    case "primary":
      defaultClassName = defaultClassName + " bg-primary text-white";
      break;
    case "secondary":
      defaultClassName = defaultClassName + " bg-secondary text-white";
      break;
    case "ghost":
      defaultClassName =
        defaultClassName + " bg-secondary bg-opacity-10 text-secondary";
      break;
    default:
      break;
  }
  if (rest.href) {
    return (
      <Link to={rest.href} className={`${defaultClassName} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={` ${defaultClassName}${
        !!isLoading ? "opacity-50 pointer-events-none" : ""
      } ${className}`}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  // kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};
export default Button;
