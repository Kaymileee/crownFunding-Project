import React from "react";
import PropsTypes from "prop-types";
const CampMeta = ({
  amount = "$2,000",
  text = "Raised of $1,900",
  size = "small",
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h4
        className={` font-semibold text-text2 ${
          size === "small" ? "text-sm" : "text-xl"
        }`}
      >
        {amount}
      </h4>
      <span
        className={` text-text4 ${size === "small" ? "text-xs" : "text-sm"}`}
      >
        {text}
      </span>
    </div>
  );
};
CampMeta.propsTypes = {
  amount: PropsTypes.any,
  text: PropsTypes.string,
  size: PropsTypes.string,
};
export default CampMeta;
