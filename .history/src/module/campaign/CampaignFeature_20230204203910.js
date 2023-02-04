import React from "react";
import CamCategory from "./parts/CamCategory";
import CampImg from "./parts/CampImg";
import CampTitle from "./parts/CampTitle";
import CampDesc from "./parts/CampDesc";
const CampaignFeature = () => {
  return (
    <div className="flex gap-x-8 items-center w-full max-w-[1048px]">
      <CampImg
        img="https://source.unsplash.com/random"
        className="h-[266px] flex-1"
      ></CampImg>
      <div className="flex-1 max-w-[435px]">
        <CamCategory text="Architecture" className="text-sm"></CamCategory>
        <CampTitle className="mb-4 text-xl font-bold">
          {" "}
          Remake - We Make architecture exhibition
        </CampTitle>
        <CampDesc className="mb-4 text-sm">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampDesc>
        <div className="w-full rounded-full bg-[#EFEFEF] mb-4 h-[5px] ">
          <div className="w-2/4 h-full rounded-full bg-primary "></div>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
