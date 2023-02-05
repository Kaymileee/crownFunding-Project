import React from "react";
import { useForm } from "react-hook-form";
import FormRow from "../../components/common/FormRow";

const CampAddNew = () => {
  const { handleSubmit } = useForm();
  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="text-center ">
        <h1 className="inline-block py-4 text-2xl font-bold  px-14 bg-text4 text-text2 bg-opacity-20 max-w-[379px] rounded-xl mb-10">
          Start a campaign 🚀
        </h1>
      </div>
      <form>
        <FormRow></FormRow>
      </form>
    </div>
  );
};

export default CampAddNew;
