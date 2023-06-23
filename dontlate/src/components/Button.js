import React from "react";
import { cls } from "../lib/utils";

const Button = ({ content, isPerfect, padding }) => {
  return (
    <button
      className={cls(
        "text-center border-2 border-borderColor   p-3 rounded-md  font-bold w-full transition-all",
        isPerfect
          ? ` border-mainColor text-mainColor hover:bg-mainColor hover:text-white ${padding}`
          : "text-borderColor"
      )}
    >
      {content}
    </button>
  );
};

export default Button;
