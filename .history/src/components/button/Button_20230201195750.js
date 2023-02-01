import React from "react";
import PropTypes from "prop-types";
const Button = ({ type = "button", children, className, ...rest }) => {
  return (
    <button
      className={`py-4 text-base font-semibold rounded-xl ${className} flex justify-center items-center text-white min-h-[56px]`}
      type={type}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default Button;
