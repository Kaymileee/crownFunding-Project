import React from "react";
import PropTypes from "prop-types";
const Button = ({
  type = "button",
  children,
  className,
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 border border-4 rounded-full border-t-transparent"></div>
  ) : (
    children
  );
  return (
    <button
      className={`py-4 text-base font-semibold rounded-xl ${className} flex justify-center items-center text-white min-h-[56px]`}
      type={type}
      {...rest}
    >
      {children}
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
