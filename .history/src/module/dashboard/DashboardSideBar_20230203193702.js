import React from "react";
import { NavLink } from "react-router-dom";
import { IconDashboard } from "../../components/icons";

const sideBarLinks = [
  { icon: <IconDashboard></IconDashboard>, title: "Dashboard", url: "/" },
];
const DashboardSideBar = () => {
  return (
    <div className="w-full md:w-[76px] bg-white rounded-3xl shadow-[10px_10px_20px_rgba(218_213_213_0.15)]">
      {sideBarLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          className="flex items-center gap-x-5"
        >
          {link.icon}
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSideBar;
