import React from "react";
import CamCategory from "./parts/CamCategory";
import CampAuthor from "./parts/CampAuthor";
import CampDesc from "./parts/CampDesc";
import CampImg from "./parts/CampImg";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";

const CampaignItem = ({}) => {
  return (
    <div className="shadow-camI">
      <CampImg></CampImg>
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
        <CampAuthor></CampAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
