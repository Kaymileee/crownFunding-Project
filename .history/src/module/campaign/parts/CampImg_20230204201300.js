import React from "react";

const CampImg = ({ className = "h-[158px]" }) => {
  return (
    <div className={`${className}`}>
      <img
        src="https://source.unsplash.com/random"
        alt=""
        className="object-cover w-full h-full rounded-2xl"
      />
    </div>
  );
};

export default CampImg;
