import React from "react";
import Heading from "../components/common/Heading";
import LayoutDashboard from "../layouts/LayoutDashboard";
import CampaignGrid from "../module/campaign/CampaignGrid";

const DashboardPage = () => {
  return (
    <LayoutDashboard>
      <Heading number={4}>Your campaign</Heading>
      <Heading>Popular Campaign</Heading>
      <CampaignGrid></CampaignGrid>
    </LayoutDashboard>
  );
};

export default DashboardPage;
