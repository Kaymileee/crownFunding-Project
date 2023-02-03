import React from "react";
import DashboardSideBar from "../module/dashboard/DashboardSideBar";
import DashboardTopBar from "../module/dashboard/DashboardTopBar";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10 bg-liteBg max-w-[1440px] mx-auto min-h-screen">
      <DashboardTopBar></DashboardTopBar>
      <div className="flex gap-x-10 items-start">
        <DashboardSideBar></DashboardSideBar>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
