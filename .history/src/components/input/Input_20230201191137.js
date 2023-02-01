import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
const Input = (props) => {
  const { control, name, type, ...rest } = props;
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <div className="relative">
      <input
        type="text"
        className={`w-full px-6 py-4 border-strockColor border rounded-xl text-text1 text-sm font-medium placeholder:text-text4 `}
        {...field}
        {...rest}
      />
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
};
export default Input;
