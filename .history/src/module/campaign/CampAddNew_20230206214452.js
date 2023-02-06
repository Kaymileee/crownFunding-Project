import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import FormGroup from "../../components/common/FormGroup";
import FormRow from "../../components/common/FormRow";
import { Dropdown } from "../../components/dropdown";
import { Textarea } from "../../components/input";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

import ImageUploader from "quill-image-uploader";
import axios from "axios";
Quill.register("modules/imageUploader", ImageUploader);

const CampAddNew = () => {
  const { handleSubmit, control } = useForm();
  const handleAddNewCamp = (values) => {
    console.log(values);
  };
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        // imgbbAPI
        upload: async (file) => {
          console.log("upload: ~ file", file);
          // const bodyFormData = new FormData();
          // console.log("upload: ~ bodyFormData", bodyFormData);
          // bodyFormData.append("image", file);
          // const response = await axios({
          //   method: "post",
          //   url: imgbbAPI,
          //   data: bodyFormData,
          //   headers: {
          //     "Content-Type": "multipart/form-data",
          //   },
          // });
          // return response.data.data.url;
        },
      },
    }),
    []
  );
  const [content, setContent] = useState();
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
          <Textarea
            control={control}
            name="short_description"
            placeholder="Write a short description...."
          ></Textarea>
        </FormGroup>
        <FormGroup>
          <Label>Story *</Label>
          <ReactQuill
            placeholder="Write your story"
            modules={modules}
            theme="snow"
            value={content}
            onChange={setContent}
          />
        </FormGroup>
        <FormRow>
          <FormGroup>
            <Label>Goal *</Label>
            <Input
              control={control}
              name="goal"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Raised Amount *</Label>
            <Input
              control={control}
              name="raised_amount"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
        </FormRow>
      </form>
    </div>
  );
};

export default CampAddNew;
