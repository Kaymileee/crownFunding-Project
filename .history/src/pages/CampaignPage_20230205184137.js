import React from "react";
import Heading from "../components/common/Heading";
import LayoutDashboard from "../layouts/LayoutDashboard";
import CampaignGrid from "../module/campaign/CampaignGrid";

const CampaignPage = () => {
  return (
    <LayoutDashboard>
      <Heading number={4}>Your Campaign </Heading>
      <CampaignGrid type="no"></CampaignGrid>
    </LayoutDashboard>
  );
};

export default CampaignPage;
