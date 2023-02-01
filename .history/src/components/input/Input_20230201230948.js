import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent";
const Input = (props) => {
  const {
    control,
    name,
    type = "text",
    error,
    placeholder,
    children,
    ...rest
  } = props;
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={`dark:bg-transparent dark:border-darkStroke dark:placeholder:text-text2 dark:text-white w-full px-6 py-4  border rounded-xl text-text1 text-sm font-medium placeholder:text-text4 ${
          error?.message.length > 0 ? "border-error" : "border-strockColor"
        } ${children ? "pr-16" : ""} `}
        placeholder={error?.message.length <= 0 ? placeholder : ""}
        {...field}
        {...rest}
      />
      {error && (
        <span className="absolute text-sm font-medium pointer-events-none text-error top-2/4 -translate-y-2/4 left-6 error-input">
          {error?.message}
        </span>
      )}
      {children && (
        <span className="absolute cursor-pointer select-none right-4 top-2/4 -translate-y-2/4">
          {children}
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
export default withErrorBoundary(Input, {
  FallbackComponent: <ErrorComponent></ErrorComponent>,
});
