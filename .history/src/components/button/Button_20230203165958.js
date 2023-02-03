import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";
const Button = ({
  type = "button",
  children,
  className,
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-8 h-8 border-4 rounded-full border-t-transparent animate-spin border-b-transparent"></div>
  ) : (
    children
  );
  return (
    <button
      className={classNames(
        `py-4 text-base font-semibold rounded-xl ${className} flex justify-center items-center text-white min-h-[56px]
    `,
        !!isLoading ? "opacity-50 pointer-events-none" : ""
      )}
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
