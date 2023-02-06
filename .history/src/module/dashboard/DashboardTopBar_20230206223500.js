import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import DashboardFun from "./DashboardFun";
import DashboardSearch from "./DashboardSearch";

const DashboardTopBar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <Link to={"/"}>
          <img
            src="https://i.pinimg.com/474x/09/e0/11/09e011b686033491f5b51dce92386d25.jpg"
            alt=""
          />
        </Link>
        <div className=" max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <DashboardFun></DashboardFun>
        <Button
          className={" px-7 text-white"}
          kind="secondary"
          type="button"
          href="/start-campaign"
        >
          Start a campaign
        </Button>
        <img src="./logo.png" alt="" className="rounded-full" />
      </div>
    </div>
  );
};

export default DashboardTopBar;
