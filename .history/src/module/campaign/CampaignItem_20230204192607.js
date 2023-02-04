import React from "react";
import { Link } from "react-router-dom";
import IconFolder from "../../components/icons/IconFolder";

const CampaignItem = ({}) => {
  return (
    <div>
      <div className="h-[158px] ">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>
      <div className="px-5 py-4">
        <Link to={"#"} className="flex items-baseline mb-4 gap-x-3">
          <IconFolder></IconFolder>
          <span className="text-sm font-medium text-text3">Education</span>
        </Link>
      </div>
    </div>
  );
};

export default CampaignItem;
