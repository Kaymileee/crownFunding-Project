import React from "react";
import Button from "../../components/button/Button";
import DashboardFun from "./DashboardFun";
import DashboardSearch from "./DashboardSearch";

const DashboardTopBar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <img src="./logo.png" alt="" />
        <div className=" max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <DashboardFun></DashboardFun>
        <Button className={"bg-secondary  px-7 text-white"} type="button">
          Start a campaign
        </Button>
        <img src="./logo.png" alt="" className="rounded-full" />
      </div>
    </div>
  );
};

export default DashboardTopBar;
