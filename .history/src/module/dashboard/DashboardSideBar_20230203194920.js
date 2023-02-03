import React from "react";
import { NavLink } from "react-router-dom";
import {
  IconCampaign,
  IconDashboard,
  IconPayment,
  IconWithdraw,
} from "../../components/icons";

const sideBarLinks = [
  { icon: <IconDashboard></IconDashboard>, title: "Dashboard", url: "/" },
  { icon: <IconCampaign></IconCampaign>, title: "Campaign", url: "/campaign" },
  { icon: <IconPayment></IconPayment>, title: "Payment", url: "/" },
  { icon: <IconWithdraw></IconWithdraw>, title: "Withdraw", url: "/withdraw" },
  { icon: <IconCampaign></IconCampaign>, title: "Campaign", url: "/" },
];
const DashboardSideBar = () => {
  return (
    <div className="w-full md:w-[76px] bg-white rounded-3xl shadow-[10px_10px_20px_rgba(218_213_213_0.15)] px-[14px] py-10 flex flex-col">
      {sideBarLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          className="flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-3xl md:mb-8 mb-4"
        >
          <span className="">{link.icon}</span>
          <span className="md:hidden">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSideBar;
