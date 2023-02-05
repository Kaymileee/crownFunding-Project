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
            <h1 className="text-[22px] font-semibold text-text1">
              Create Your Campaign
            </h1>
            <p className="text-sm font-normal text-text3">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <a href="/" className="text-sm font-normal text-primary">
              Need any help? Learn More...
            </a>
          </div>
        </div>
        <Button
          className={" px-8"}
          type="button"
          kind="ghost"
          href="/start-campaign"
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
      <Button type="ghost" className={" px-8"} type="button">
        <span>See more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
      </Button>
    </LayoutDashboard>
  );
};

export default CampaignPage;
