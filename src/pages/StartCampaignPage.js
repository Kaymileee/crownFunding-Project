import React from "react";
import LayoutDashboard from "../layouts/LayoutDashboard";
import CampAddNew from "../module/campaign/CampAddNew";

const StartCampaignPage = () => {
  return (
    <LayoutDashboard>
      <CampAddNew></CampAddNew>
    </LayoutDashboard>
  );
};

export default StartCampaignPage;
