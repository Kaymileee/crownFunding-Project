import React from "react";

const CampMeta = ({ amount = "$2,000", text = "Raised of $1,900" }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h4 className="text-sm font-semibold text-text2">{amount}</h4>
      <span className="text-xs text-text4">{text}</span>
    </div>
  );
};

export default CampMeta;
