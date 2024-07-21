/** @format */
// "use client";

import React from "react";

import bgSidebarDesktop from "@/assets/images/bg-sidebar-desktop.png";
import bgSidebarMobile from "@/assets/images/bg-sidebar-mobile.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";

const fromSteps = [
  {
    step: 1,
    title: "hub info"
  },
  {
    step: 2,
    title: "INVESTMENT PLAN"
  },
  {
    step: 3,
    title: "INVESTMENT TYPES"
  },
  {
    step: 4,
    title: "Summary"
  }
];

type SidebarType = {
  activeStep: number;
};

export default function Sidebar(props: SidebarType) {
  //   console.log("activeStep", props.activeStep);
  return (
    <div className="relative   z-10 hidden md:flex   ">
      <Image
        className=" hidden md:flex"
        src={bgSidebarDesktop}
        alt="bg-sidebar-desktop"
      />

      <div className="absolute top-0 left-0  py-8 px-8 flex md:flex-col gap-6  ">
        {fromSteps.map((d, i) => (
          <ProgressStep
            key={i}
            activeStep={props.activeStep}
            title={d.title}
            step={d.step}
          />
        ))}
      </div>
    </div>
  );
}

// ProgressStep

type ProgressStepType = {
  step: number;
  title: string;
  activeStep: number;
};

function ProgressStep(props: ProgressStepType) {
  return (
    <div className="flex gap-6 items-center">
      {/* step left */}
      <div
        className={cn(
          "h-5 w-5 border border-black p-4  rounded-full flex items-center justify-center text-black font-semibold ",
          { "bg-blue-100 text-white border-white  ": props.activeStep === props.step }
        )}
      >
        {props.step}
      </div>
      {/* right  */}
      <div className="hidden md:block">
        <p className="text-black">STEP {props.step}</p>
        <p className="text-black font-bold uppercase"> {props.title} </p>
      </div>
    </div>
  );
}

export function MobileSidebar(props: SidebarType) {
  return (
    <div className=" md:hidden fixed  z-10   top-0 left-0  w-full">
      <Image
        className="md:hidden   w-full object-contain"
        src={bgSidebarMobile}
        alt="bg-sidebar-desktop"
      />

      <div className=" absolute  z-10   py-8 px-8 flex md:flex-col gap-6  top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        {fromSteps.map((d, i) => (
          <ProgressStep
            key={i}
            activeStep={props.activeStep}
            title={d.title}
            step={d.step}
          />
        ))}
      </div>
    </div>
  );
}
