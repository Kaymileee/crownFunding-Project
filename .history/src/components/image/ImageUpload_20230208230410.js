import React from "react";

const ImageUpload = () => {
  const handleUploadImg = (e) => {
    console.log(e.target.files[0]);
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
