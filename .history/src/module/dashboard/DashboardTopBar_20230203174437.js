import React from "react";
import DashboardSearch from "./DashboardSearch";

const DashboardTopBar = () => {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center flex-1 gap-x-14">
        <img src="./logo.png" alt="" />
        <div className=" max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center flex-1 gap-x-10"></div>
    </div>
  );
};

export default DashboardTopBar;
