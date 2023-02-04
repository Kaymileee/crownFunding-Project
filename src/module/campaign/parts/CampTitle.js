import React from "react";
import PropsTypes from "prop-types";

const CampTitle = ({
  children,
  className = "mb-1 text-base font-semibold",
}) => {
  return <h2 className={`leading-4 text-text1 ${className}`}>{children}</h2>;
};
CampTitle.propsTypes = {
  children: PropsTypes.node,
  className: PropsTypes.string,
};
export default CampTitle;
