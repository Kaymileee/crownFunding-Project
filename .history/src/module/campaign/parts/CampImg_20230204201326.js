import React from "react";

const CampImg = ({
  className = "h-[158px]",
  img = "https://source.unsplash.com/random",
}) => {
  return (
    <div className={`${className}`}>
      <img
        src={img}
        alt=""
        className="object-cover w-full h-full rounded-2xl"
      />
    </div>
  );
};

export default CampImg;
