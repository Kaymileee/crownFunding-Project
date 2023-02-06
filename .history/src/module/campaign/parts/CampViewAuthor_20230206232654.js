import React from "react";
import { defaultImage } from "../../../constants/global";

const CampViewAuthor = () => {
  return (
    <div className="flex items-center gap-x-5">
      <img
        src={defaultImage}
        alt=""
        className="w-[60px] h-[60px] object-cover rounded-full"
      />
      <div className="flex-col flex-1">
        <div>
          <h3>Saiful Islam</h3>
          <div className="flex">
            {Array(5)
              .fill(0)
              .map((item, index) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F5A623"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#F5A623"
                  className="w-6 h-6"
                  key={index}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampViewAuthor;
