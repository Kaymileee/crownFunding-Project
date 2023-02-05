import React from "react";
import Button from "../components/button/Button";
import Heading from "../components/common/Heading";
import LayoutDashboard from "../layouts/LayoutDashboard";
import CampaignFeature from "../module/campaign/CampaignFeature";
import CampaignGrid from "../module/campaign/CampaignGrid";

const CampaignPage = () => {
  return (
    <LayoutDashboard>
      <div className="flex items-center justify-between px-10 py-8 mb-10 bg-white rounded-3xl ">
        <div className="flex items-start gap-x-6">
          <div className="flex items-center justify-center rounded-full cursor-pointer w-14 h-14 bg-secondary bg-opacity-60">
            <svg
              width={24}
              className="text-white"
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 12H19"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col flex-1 gap-y-2">
            <h1 className="text-2xl font-semibold text-text1">
              Create Your Campaign
            </h1>
            <p className="text-sm font-normal text-text3">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <p className="font-normal text-primary">
              Need any help? Learn More...
            </p>
          </div>
        </div>
        <Button
          className={"bg-[#EEEAFD] w-[200px] text-secondary"}
          type="button"
        >
          Create campaign
        </Button>
      </div>
      <Heading number={4}>Your Campaign </Heading>
      <CampaignGrid type="col-1">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>
    </LayoutDashboard>
  );
};

export default CampaignPage;
