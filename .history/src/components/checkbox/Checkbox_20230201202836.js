import React from "react";
import PropTypes from "prop-types";
const Checkbox = ({ name, checked = false, onClick = () => {}, children }) => {
  return (
    <div className="flex items-start">
      <div
        onClick={onClick}
        className={`inline-flex justify-center items-center p-1 text-white w-5 h-5 border rounded cursor-pointer  ${
          checked ? "bg-primary border-primary" : "border-text4"
        }`}
      >
        <input
          type="checkbox"
          name={name}
          className="hidden"
          onChange={() => {}}
        />
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </span>
      </div>
      {children && <label className="font-medium text-text3">{children}</label>}
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Checkbox;
