import React from "react";
import CampImg from "./parts/CampImg";

const CampaignFeature = () => {
  return (
    <div className="flex fap-x-8 items-center w-full max-w-[1048px]">
      <CampImg
        img="https://source.unsplash.com/random"
        className="h-[266px] w-full"
      ></CampImg>
      <div className="flex-1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
        sapiente, sunt a in nesciunt cupiditate itaque, voluptatibus architecto
        alias aspernatur, beatae iusto. Vel nisi est in nihil laboriosam,
        placeat ratione.
      </div>
    </div>
  );
};

export default CampaignFeature;
