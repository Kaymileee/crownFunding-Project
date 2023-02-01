import React from "react";
import PropTypes from "prop-types";
const Checkbox = ({ name }) => {
  return (
    <label
      name={name}
      className="inline-block w-5 h-5 border rounded border-strockColor"
    ></label>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Checkbox;
