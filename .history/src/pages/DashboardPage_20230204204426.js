import React from "react";
import Gap from "../components/common/Gap";
import Heading from "../components/common/Heading";
import LayoutDashboard from "../layouts/LayoutDashboard";
import CampaignFeature from "../module/campaign/CampaignFeature";
import CampaignGrid from "../module/campaign/CampaignGrid";
import CampaignItem from "../module/campaign/CampaignItem";

const DashboardPage = () => {
  return (
    <LayoutDashboard>
      <Heading number={4}>Your campaign</Heading>
      <CampaignFeature></CampaignFeature>
      <Gap></Gap>
      <Heading>Popular Campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item, i) => (
            <CampaignItem key={i}> </CampaignItem>
          ))}
      </CampaignGrid>
      <Heading>Recent Campaign</Heading>
    </LayoutDashboard>
  );
};

export default DashboardPage;
