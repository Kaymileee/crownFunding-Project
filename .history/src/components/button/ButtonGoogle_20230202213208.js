import React from "react";

const ButtonGoogle = () => {
  return (
    <button className="flex items-center justify-center w-full py-3 mb-3 text-base font-semibold border gap-x-3 border-strockColor rounded-xl text-text2 dark:text-white dark:border-darkStroke">
      <img srcSet="/logo.png" alt="logo" />

      <span>Sign up with google</span>
    </button>
  );
};

export default ButtonGoogle;
