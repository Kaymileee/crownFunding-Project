import React from "react";
import { defaultImage } from "../../../constants/global";
import PropsTypes from "prop-types";

const CampAuthor = ({ image = defaultImage, author = "Mahfuzul Nabil" }) => {
  return (
    <div className="flex items-center gap-x-3">
      <div className="w-8 h-8 ">
        <img
          src={image}
          alt="avatar"
          className="object-cover w-full h-full rounded-full"
        />
      </div>
      <p className="text-xs font-normal text-text3">
        by <span className="font-semibold text-text2">{author}</span>{" "}
      </p>
    </div>
  );
};
CampAuthor.propsTypes = {
  image: PropsTypes.string,
  author: PropsTypes.string,
};
export default CampAuthor;
