import React from "react";
import CamCategory from "./parts/CamCategory";
import CampImg from "./parts/CampImg";

const CampaignFeature = () => {
  return (
    <div className="flex gap-x-8 items-center w-full max-w-[1048px]">
      <CampImg
        img="https://source.unsplash.com/random"
        className="h-[266px] flex-1"
      ></CampImg>
      <div className="flex-1 max-w-[435px]">
        <CamCategory text="Architecture" className=""></CamCategory>
      </div>
    </div>
  );
};

export default CampaignFeature;
