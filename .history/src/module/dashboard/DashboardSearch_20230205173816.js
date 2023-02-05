import React from "react";

const DashboardSearch = () => {
  return (
    <div className="relative">
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
      <div className="search-results w-[843px] bg-white absolute top-full left-0 translate-y-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda sint
        odit sit exercitationem culpa obcaecati nesciunt, praesentium quod
        doloribus quam temporibus aperiam, quae iste quaerat numquam ducimus
        expedita? Esse, fuga?
      </div>
    </div>
  );
};

export default DashboardSearch;
