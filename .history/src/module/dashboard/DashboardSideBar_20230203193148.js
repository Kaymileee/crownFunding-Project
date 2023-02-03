import React from "react";
import { IconDashboard } from "../../components/icons";

const sideBarLinks = [
  { icon: <IconDashboard></IconDashboard>, title: "Dashboard", url: "/" },
];
const DashboardSideBar = () => {
  return (
    <div className="w-full md:w-[76px]">
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
