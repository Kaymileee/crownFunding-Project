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
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="52" height="52" rx="10" fill="#2C2F32" />
            <path
              d="M15.186 23.2348C13.8487 20.8914 14.5874 17.9269 16.8359 16.6135V16.6135C19.0844 15.3001 21.9912 16.135 23.3285 18.4785L29.1985 28.7652C30.5358 31.1086 29.797 34.0731 27.5485 35.3866V35.3866C25.3001 36.7 22.3932 35.865 21.056 33.5216L15.186 23.2348Z"
              fill="url(#paint0_linear_2240_14523)"
            />
            <path
              d="M39.2349 20.692C39.2349 23.3238 37.1345 25.4572 34.5435 25.4572C31.9525 25.4572 29.8521 23.3238 29.8521 20.692C29.8521 18.0602 31.9525 15.9268 34.5435 15.9268C37.1345 15.9268 39.2349 18.0602 39.2349 20.692Z"
              fill="url(#paint1_linear_2240_14523)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2240_14523"
                x1="16.8359"
                y1="16.6135"
                x2="27.441"
                y2="35.002"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1DC071" />
                <stop offset="1" stop-color="#77D9AA" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2240_14523"
                x1="34.5435"
                y1="15.9268"
                x2="34.5205"
                y2="25.2866"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1DC071" />
                <stop offset="1" stop-color="#77D9AA" />
              </linearGradient>
            </defs>
          </svg>
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
