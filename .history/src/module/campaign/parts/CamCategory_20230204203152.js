import React from "react";
import { Link } from "react-router-dom";
import { IconFolder } from "../../../components/icons";

const CamCategory = ({ text = "Education", className = "mb-4 text-sm" }) => {
  return (
    <Link to={"#"} className={`flex items-center gap-x-3 ${className}`}>
      <IconFolder></IconFolder>
      <span className="font-medium  text-text3">{text}</span>
    </Link>
  );
};

export default CamCategory;
