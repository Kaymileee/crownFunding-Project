import React from "react";

const DashboardSearch = () => {
  return (
    <div className="max-w-[458px] p-2 bg-white shadow-[10px_10px_20px_rgba(218, 213, 213, 0.15)] w-full rounded-full flex items-center">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Do fundrise now"
          className="w-full text-sm font-normal bg-transparent placeholder:text-text4 text-text1"
        />
      </div>
      <button className="max-w-[72px] bg-primary text-white rounded-full w-full h-10 flex justify-center items-center">
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
  );
};

export default DashboardSearch;
