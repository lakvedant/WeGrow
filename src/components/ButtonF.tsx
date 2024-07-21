/** @format */

import { cn } from "@/lib/utils";
import React from "react";

interface ButtonType extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

export default function ButtonF(props: ButtonType) {
  return (
    <button
      {...props}
      className={cn(
        "text-white w-fit  bg-blue-50 hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   px-5 py-2.5 text-center",
        {
          "bg-blue-50": props.variant == "primary"
        },
        {
          "bg-blue-50": props.variant == "secondary"
        },
        {
          "bg-white text-gray-400 border-2 focus:ring-0": props.variant == "ghost"
        }
      )}
    />
  );
}
