import React from "react";

const CampDesc = ({ children, className = "mb-4 text-sm " }) => {
  return <p className={` font-normal text-text3 ${className}`}>{children}</p>;
};

export default CampDesc;
