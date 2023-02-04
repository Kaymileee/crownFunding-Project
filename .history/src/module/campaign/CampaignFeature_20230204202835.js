import React from "react";
import CampImg from "./parts/CampImg";

const CampaignFeature = () => {
  return (
    <div className="flex fap-x-8 items-center w-full max-w-[1048px]">
      <CampImg
        img="https://source.unsplash.com/random"
        className="h-[266px] w-full"
      ></CampImg>
      <div className="flex-1"></div>
    </div>
  );
};

export default CampaignFeature;
