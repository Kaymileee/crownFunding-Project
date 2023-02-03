import React from "react";
import { IconDashboard } from "../../components/icons";

const sideBarLinks = [
  { icon: <IconDashboard></IconDashboard>, title: "Dashboard", url: "/" },
];
const DashboardSideBar = () => {
  return (
    <div className="w-full md:w-[76px] bg-white rounded-3xl shadow-[10px_10px_20px_rgba(218, 213, 213, 0.15)]">
      {sideBarLinks.map((link) => (
        <div key={link.title}>
          {link.icon}
          {link.title}
        </div>
      ))}
    </div>
  );
};

export default DashboardSideBar;
