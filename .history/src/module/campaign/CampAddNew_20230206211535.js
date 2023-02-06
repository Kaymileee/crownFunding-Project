import React from "react";
import { useForm } from "react-hook-form";
import FormGroup from "../../components/common/FormGroup";
import FormRow from "../../components/common/FormRow";
import { Dropdown } from "../../components/dropdown";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";

const CampAddNew = () => {
  const { handleSubmit, control } = useForm();
  const handleAddNewCamp = (values) => {
    console.log(values);
  };
  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="text-center ">
        <h1 className="inline-block py-4 text-2xl font-bold  px-14 bg-text4 text-text2 bg-opacity-20 max-w-[379px] rounded-xl mb-10">
          Start a campaign 🚀
        </h1>
      </div>
      <form onSubmit={handleSubmit(handleAddNewCamp)}>
        <FormRow>
          <FormGroup>
            <Label>Campaign Titel *</Label>
            <Input
              control={control}
              name="title"
              placeholder="Write a titel"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Select a category *</Label>
            {/* {dropdown} */}
            <Dropdown>
              <Dropdown.Select placeholder="Select the category"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option onClick={() => {}}>Chat GPT</Dropdown.Option>
                <Dropdown.Option onClick={() => {}}>Art</Dropdown.Option>
                <Dropdown.Option onClick={() => {}}>Crypto</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label>Short Description *</Label>
          <Textarea control={control}></Textarea>
        </FormGroup>
      </form>
    </div>
  );
};

export default CampAddNew;
