import React from "react";
import DashboardSearch from "./DashboardSearch";

const DashboardTopBar = () => {
  return (
    <div className="flex items-center gap-x-14">
      <img src="./logo.png" alt="" />
      <div className="ml-14 max-w-[458px] w-full">
        <DashboardSearch></DashboardSearch>
      </div>
    </div>
  );
};

export default DashboardTopBar;
