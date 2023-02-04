import React from "react";

const CampTitle = ({
  children,
  className = "mb-1 text-base font-semibold",
}) => {
  return <h2 className={`   leading-4 text-text1 ${className}`}>{children}</h2>;
};

export default CampTitle;
