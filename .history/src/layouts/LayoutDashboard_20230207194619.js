import React from "react";
import ReactModal from "react-modal";
import { Outlet } from "react-router-dom";
import Overplay from "../components/common/Overplay";
import DashboardSideBar from "../module/dashboard/DashboardSideBar";
import DashboardTopBar from "../module/dashboard/DashboardTopBar";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10 bg-[#FCFCFD]  min-h-screen relative">
      {/* <div className="absolute inset-0 z-40 bg-black overplay bg-opacity-30"></div> */}
      <ReactModal
        isOpen
        overlayClassName={
          "modal-overplay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center "
        }
        className="modal-content max-w-[460px] bg-white rounded-lg outline-none"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nisi
        commodi error hic voluptas suscipit aperiam optio possimus soluta,
        beatae quod ipsum laborum reprehenderit blanditiis accusantium officiis
        veritatis a asperiores.
      </ReactModal>
      <Overplay></Overplay>
      <DashboardTopBar></DashboardTopBar>
      <div className="flex items-start gap-x-10">
        <DashboardSideBar></DashboardSideBar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
