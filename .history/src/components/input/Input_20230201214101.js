import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
const Input = (props) => {
  const { control, name, type = "text", error, placeholder, ...rest } = props;
  const { field } = useController({ control, name, defaultValue: "" });
  console.log(error);
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={`w-full px-6 py-4  border rounded-xl text-text1 text-sm font-medium placeholder:text-text4 ${
          error?.message.length > 0 ? "border-error" : "border-strockColor"
        }`}
        placeholder={error?.message ? error.message : placeholder}
        {...field}
        {...rest}
      />
      {error && (
        <span className="absolute text-sm font-medium text-error top-2/4 -translate-y-2/4 left-6">
          {error?.message}
        </span>
      )}
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.object,

  control: PropTypes.any.isRequired,
};
export default Input;