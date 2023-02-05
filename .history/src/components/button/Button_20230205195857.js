import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Button = ({
  type = "button",
  children,
  className = "text-white",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-8 h-8 border-4 rounded-full border-t-transparent animate-spin border-b-transparent"></div>
  ) : (
    children
  );
  const defaultClassName =
    "py-4 text-base font-semibold rounded-xl  flex justify-center items-center  min-h-[56px]";
  if (rest.href) {
    return (
      <Link to={rest.href} className={`${defaultClassName}`}>
        demo
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
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};
export default Button;
