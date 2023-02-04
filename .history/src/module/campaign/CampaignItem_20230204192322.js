import React from "react";
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
        <IconFolder></IconFolder>
      </div>
    </div>
  );
};

export default CampaignItem;
