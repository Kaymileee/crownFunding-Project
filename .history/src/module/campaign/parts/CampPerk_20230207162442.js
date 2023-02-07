import React from "react";
import CampTitle from "./CampTitle";

const CampPerk = () => {
  return (
    <div className="bg-white shadow-1 rounded-xl">
      <div className="h-[232px] rounded-xl overflow-hidden mb-5">
        <img
          src="https://plus.unsplash.com/premium_photo-1673448391222-be6d528034f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b3V0ZG9vcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col items-start px-5 gap-y-5">
        <span className="px-3 py-1 text-xs font-medium text-white rounded-md bg-secondary">
          Featured
        </span>
        <CampTitle className="text-xl font-semibold">
          Special One Camera
        </CampTitle>
        <div className="flex items-center gap-x-3">
          <span className="text-xl font-semibold text-text1">$2,724 USD</span>{" "}
          <span className="text-sm font-medium text-error">
            $1,504 USD <span>(12% OFF)</span>
          </span>
        </div>
        <div className="">
          <p className="text-base font-medium text-text1">Estimated Shipping</p>
          <p className="text-sm text-text2">October 2022</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="text-text2 ">
            <span className="font-medium text-text1">05</span> claimed
          </p>
          <p className="text-sm text-text2">Ships worldwide</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CampPerk;
