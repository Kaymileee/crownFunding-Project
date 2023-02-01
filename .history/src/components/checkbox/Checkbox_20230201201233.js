import React from "react";
import PropTypes from "prop-types";
const Checkbox = ({ name, checked = true }) => {
  return (
    <label
      name={name}
      className={`inline-block w-5 h-5 border rounded cursor-pointer  ${
        checked ? "bg-primary border-primary" : "border-text4"
      }`}
    >
      <input type="checkbox" name={name} className="hidden" />
    </label>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Checkbox;
