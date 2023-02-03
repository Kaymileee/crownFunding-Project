import React from "react";
import Button from "../../components/button/Button";
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
      <div className="flex items-center flex-1 gap-x-10">
        <div className="flex items-center gap-x-2 text-iconColor">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
            />
          </svg>
          <span className="text-base font-semibold text-text2">
            Fundrising for
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <Button className={"bg-secondary"}>Start a campaign</Button>
      </div>
    </div>
  );
};

export default DashboardTopBar;
