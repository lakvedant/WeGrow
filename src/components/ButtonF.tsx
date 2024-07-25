/** @format */

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonType extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  type: "button" | "submit";
}

const ButtonF: React.FC<ButtonType> = ({ variant = "primary", type, children, className, ...props }) => {
  return (
    <button
      className={cn(
        "text-white w-fit bg-blue-500 hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",
        {
          "bg-gray-200 text-gray-700": variant === "secondary",
          "bg-transparent text-gray-400 border-2 border-gray-400": variant === "ghost",
        },
        className
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonF;
