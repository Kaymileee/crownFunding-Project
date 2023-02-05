import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  IconCampaign,
  IconDashboard,
  IconLight,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithdraw,
} from "../../components/icons";

const sideBarLinks = [
  { icon: <IconDashboard></IconDashboard>, title: "Dashboard", url: "/" },
  { icon: <IconCampaign></IconCampaign>, title: "Campaign", url: "/campaign" },
  { icon: <IconPayment></IconPayment>, title: "Payment", url: "/payment" },
  { icon: <IconWithdraw></IconWithdraw>, title: "Withdraw", url: "/withdraw" },
  { icon: <IconProfile></IconProfile>, title: "Profile", url: "/profile" },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "/#",
    onclick: () => {},
  },
  {
    icon: <IconLight></IconLight>,
    title: "Light/Dark",
    url: "/#",
    onclick: () => {},
  },
];
const DashboardSideBar = () => {
  const links = document.querySelectorAll("a");
  links.forEach((item) =>
    item.addEventListener("click", () => {
      links.forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
    })
  );
  const navLinksClass =
    " flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-xl md:mb-8 mb-4   active:text-primary last:mt-auto last:bg-white last:shadow-sdPrimary ";
  return (
    <div className="w-full md:w-[76px] bg-white rounded-3xl shadow-[10px_10px_20px_rgba(218_213_213_0.15)] px-[14px] py-10 flex flex-col flex-shrink-0">
      {sideBarLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          className={({ isActive }) =>
            isActive
              ? `${navLinksClass} text-primary bg-primary bg-opacity-20`
              : `${navLinksClass} text-iconColor`
          }
        >
          <span className="">{link.icon}</span>
          <span className="md:hidden">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSideBar;
