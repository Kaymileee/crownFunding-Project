import React from "react";
import DashboardSearch from "./DashboardSearch";

const DashboardTopBar = () => {
  return (
    <div className="flex items-center ">
      <img src="./logo.png" alt="" />
      <DashboardSearch></DashboardSearch>
    </div>
  );
};

export default DashboardTopBar;
