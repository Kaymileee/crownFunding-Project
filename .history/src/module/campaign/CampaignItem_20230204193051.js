import React from "react";
import { Link } from "react-router-dom";
import { IconFolder } from "../../components/icons";

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
        <Link to={"#"} className="flex items-center mb-4 gap-x-3">
          <IconFolder></IconFolder>
          <span className="text-sm font-medium text-text3">Education</span>
        </Link>
        <h2 className="mb-2 text-sm font-semibold leading-4 text-text1">
          Powered Kits Learning Boxes
        </h2>
        <p className="mb-4 text-sm text-text3">
          Fun, durable and reusable boxes with eco-friendly options.
        </p>
      </div>
    </div>
  );
};

export default CampaignItem;
