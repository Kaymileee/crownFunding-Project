import React from "react";
import DashboardSideBar from "../module/dashboard/DashboardSideBar";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10 bg-liteBg max-w-[1440px]">
      <DashboardSideBar></DashboardSideBar>
      {children}
    </div>
  );
};

export default LayoutDashboard;
