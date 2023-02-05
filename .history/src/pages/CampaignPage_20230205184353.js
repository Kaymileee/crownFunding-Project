import React from "react";
import Heading from "../components/common/Heading";
import LayoutDashboard from "../layouts/LayoutDashboard";
import CampaignFeature from "../module/campaign/CampaignFeature";
import CampaignGrid from "../module/campaign/CampaignGrid";

const CampaignPage = () => {
  return (
    <LayoutDashboard>
      <div className="mb-10 bg-white"></div>
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
