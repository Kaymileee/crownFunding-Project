import React from "react";
import Input from "../../../components/input/Input";

const CampSupport = () => {
  return (
    <div>
      <h2 className="mb-5 text-lg font-semibold ">Support</h2>
      <div className="flex flex-col items-center px-6 bg-white rounded-lg shadow-1 py-7 gap-y-8">
        <h4 className="text-xl font-medium text-text3">
          Pledge without reward
        </h4>
        <Input></Input>
      </div>
    </div>
  );
};

export default CampSupport;
