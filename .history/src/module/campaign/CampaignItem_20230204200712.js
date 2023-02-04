import React from "react";
import CamCategory from "./parts/CamCategory";
import CampDesc from "./parts/CampDesc";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";

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
        <CamCategory></CamCategory>
        <CampTitle>Powered Kits Learning Boxes</CampTitle>
        <CampDesc>
          {" "}
          Fun, durable and reusable boxes with eco-friendly options.
        </CampDesc>
        <div className="flex items-start justify-between mb-5 gap-x-5">
          <CampMeta></CampMeta>
          <CampMeta amount="173" text="Total backers"></CampMeta>
        </div>
        <div className="flex items-center gap-x-3">
          <div className="w-8 h-8 ">
            <img
              src="https://i.pinimg.com/236x/ac/b6/5d/acb65d9feeca93ae499a522f0af4fa33.jpg"
              alt="avatar"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <p className="text-xs font-normal text-text3">
            by <span className="font-semibold text-text2">Mahfuzul Nabil</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignItem;
