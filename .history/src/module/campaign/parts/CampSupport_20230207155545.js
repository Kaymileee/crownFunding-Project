import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../../components/input/Input";

const CampSupport = () => {
  const { control } = useForm();
  return (
    <div>
      <h2 className="mb-5 text-lg font-semibold ">Support</h2>
      <div className="flex flex-col px-6 bg-white rounded-lg shadow-1 py-7 gap-y-8">
        <h4 className="text-xl font-medium text-center text-text3">
          Pledge without reward
        </h4>
        <Input placeholder="$10" control={control} name="pedge"></Input>
        <div className="bg-[#F7F7F7] p-5 rounded-lg text-sm">
          <h5 className="mb-5 font-semibold text-text2">
            Back it because you believe in it.
          </h5>
          <p className="font-normal text-text3">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampSupport;
