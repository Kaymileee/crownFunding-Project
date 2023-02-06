import React from "react";
import IconBag from "../../../components/icons/IconBag";

const PerkOffer = () => {
  return (
    <div className="my-10 bg-secondary h-[120px] rounded-xl flex gap-x-5 text-white py-8 pl-[45px]">
      <IconBag></IconBag>
      <h3 className="text-2xl font-bold">You will get 90% of total raised</h3>
    </div>
  );
};

export default PerkOffer;
