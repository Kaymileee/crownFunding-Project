import React from "react";

const CampTitle = ({ children, className = "mb-1 text-base" }) => {
  return (
    <h2 className={`  font-semibold leading-4 text-text1 ${className}`}></h2>
  );
};

export default CampTitle;
