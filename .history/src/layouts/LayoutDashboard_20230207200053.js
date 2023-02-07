import React from "react";
import { useForm } from "react-hook-form";
import ReactModal from "react-modal";
import { Outlet } from "react-router-dom";
import { Button } from "../components/button";
import Overplay from "../components/common/Overplay";
import { Input } from "../components/input";
import DashboardSideBar from "../module/dashboard/DashboardSideBar";
import DashboardTopBar from "../module/dashboard/DashboardTopBar";

const LayoutDashboard = ({ children }) => {
  const { control } = useForm();

  return (
    <div className="p-10 bg-[#FCFCFD]  min-h-screen relative">
      {/* <div className="absolute inset-0 z-40 bg-black overplay bg-opacity-30"></div> */}
      <ReactModal
        isOpen
        overlayClassName={
          "modal-overplay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        }
        className="modal-content max-w-[521px] w-full bg-white rounded-lg outline-none px-10 py-12 relative"
      >
        <button className="absolute z-10 flex items-center justify-center text-opacity-50 w-11 h-11 top-[10px] right-12 text-text1">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="mb-10 text-2xl font-bold text-center text-text1">
          Back this project
        </h2>
        <p className="mb-[10px] text-sm font-normal text-text2">
          Enter the contribute amount
        </p>
        <Input
          placeholder="$10"
          control={control}
          name="Pledge"
          className="w-full px-5 py-4 mb-5 text-lg font-medium border rounded-lg border-strockColor"
        ></Input>
        <p className="mb-5">Contribution are not associatied with perks</p>
        <Button className=" text-white bg-primary max-w-[162px] w-full">
          Continue
        </Button>
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
