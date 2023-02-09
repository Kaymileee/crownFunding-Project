import axios from "axios";
import React from "react";
import { imgbbAPI } from "../../config/config";

const ImageUpload = ({ onChange = () => {}, name = "" }) => {
  const handleUploadImg = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    // const { name: imageName } = file;
    // onChange(name, response.data.data.url);
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    const response = await axios({
      method: "post",
      url: imgbbAPI,
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const imgData = response.data.data;
    const imgObj = {
      medium: imgData.medium.url,
      thumb: imgData.thumb,
      url: imgData.url,
    };
    console.log(response.data.data);
  };
  return (
    <label className=" w-full border border-gray-200 border-dashed rounded-xl h-[200px] cursor-pointer   flex item justify-center">
      <input type="file" onChange={handleUploadImg} className="hidden" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="block w-6 h-6 mx-auto my-auto"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
        />
      </svg>
    </label>
  );
};

export default ImageUpload;
