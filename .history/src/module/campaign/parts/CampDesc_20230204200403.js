import React from "react";
import PropsTypes from "prop-types";

const CampDesc = ({ children, className = "mb-4 text-xs " }) => {
  return <p className={` font-normal text-text3 ${className}`}>{children}</p>;
};
CampDesc.propsTypes = {
  children: PropsTypes.node,
  className: PropsTypes.string,
};
export default CampDesc;
