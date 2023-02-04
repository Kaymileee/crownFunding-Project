import React from "react";

const CampDesc = ({ children, className = "text-sm" }) => {
  return <p className={`mb-4  font-normal text-text3`}>{children}</p>;
};

export default CampDesc;
