import React from "react";

const ImageUpload = () => {
  return (
    <label className="block w-full border border-gray-200 border-dashed rounded-xl h-[200px] cursor-pointer   flex item justify-center">
      <input type="file" onChange={() => {}} className="hidden" />
    </label>
  );
};

export default ImageUpload;
