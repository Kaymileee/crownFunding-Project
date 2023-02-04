import React from "react";
import { Link } from "react-router-dom";
import { IconFolder } from "../../../components/icons";

const CamCategory = ({ text = "Education", className = "" }) => {
  return (
    <Link to={"#"} className={`flex items-center mb-4 gap-x-3 ${className}`}>
      <IconFolder></IconFolder>
      <span className="text-sm font-medium text-text3">{text}</span>
    </Link>
  );
};

export default CamCategory;
