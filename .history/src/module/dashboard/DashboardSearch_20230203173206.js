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
    </div>
  );
};

export default DashboardSearch;
