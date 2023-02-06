import React from "react";
import IconGg from "../icons/IconGg";

const ButtonGoogle = ({ text = "Sign up with google", onClick }) => {
  return (
    <button
      className="flex items-center justify-center w-full py-3 mb-3 text-base font-semibold border gap-x-3 border-strockColor rounded-xl text-text2 dark:text-white dark:border-darkStroke"
      onClick={onClick}
    >
      <IconGg></IconGg>

      <span>{text}</span>
    </button>
  );
};

export default ButtonGoogle;
