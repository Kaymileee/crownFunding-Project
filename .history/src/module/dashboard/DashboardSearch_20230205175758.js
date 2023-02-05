import React from "react";

const DashboardSearch = () => {
  return (
    <div className="relative z-50">
      <div className=" p-2 bg-white shadow-[10px_10px_20px_rgba(218_213_213_0.15)] w-full rounded-full flex items-center max-h-[52px] h-full">
        <div className="flex-1 px-5">
          <input
            type="text"
            placeholder="Do fundrise now"
            className="w-full text-sm font-normal bg-transparent placeholder:text-text4 text-text1 "
          />
        </div>
        <button className="max-w-[72px] bg-primary text-white rounded-full w-full h-10 flex justify-center items-center flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <div className="search-results w-[843px] bg-white absolute top-full left-0 translate-y-5 pb-6 rounded-3xl">
        <div className="flex items-center justify-between p-3 bg-graySoft rounded-3xl">
          <h4 className="pl-4 text-sm font-medium underline">
            See all 10,124 fundraisier
          </h4>
          <button className="px-6 py-3 bg-[#F9E3E3] rounded-lg">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2227_7016)">
                <path
                  d="M20 5.61143L18.3886 4L12 10.3886L5.61143 4L4 5.61143L10.3886 12L4 18.3886L5.61143 20L12 13.6114L18.3886 20L20 18.3886L13.6114 12L20 5.61143Z"
                  fill="#EB5757"
                />
              </g>
              <defs>
                <clipPath id="clip0_2227_7016">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div className="flex flex-col p-6 gap-y-5">
          <div className="flex items-center gap-x-5">
            <img
              src="https://i.pinimg.com/236x/64/8f/77/648f771bd0507af0f1206d2aa980c47d.jpg"
              alt="avatar-result"
              className="w-[50px] h-[50px] rounded-xl object-cover"
            />{" "}
            <div className="flex flex-col flex-1 gap-y-1">
              <h3 className="">Education fund for Durgham Family</h3>
              <span>By Durgham Family</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSearch;
