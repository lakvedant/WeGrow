/** @format */

"use client";

import checkmarkImge from "@/assets/images/icon-advanced.svg";

import React, { useState } from "react";
import { IStep } from "@/@types";
import Image from "next/image";
import { investType, InvestmentType } from "@/constants";
import ContentSection from "../Title";
import { cn } from "@/lib/utils";
import ButtonF from "../ButtonF";
import { useAtom } from "jotai";
import { investTypeAtom} from "@/store/store";

type IPlan = {
  imageURl: string;
  title: string;
  setinvestPlan: React.Dispatch<React.SetStateAction<InvestmentType>>;
  data: InvestmentType;
  investPlan: InvestmentType;
};

type SelectPanType = {
  nextStep: () => void;
  prevStep: () => void;
};

export default function SelectPan({ nextStep, prevStep }: SelectPanType) {
  // const [openTab, setOpenTab] = React.useState(1);
  const [investPlan, setinvestPlan] = useAtom(investTypeAtom);

//   function handleSlectedPlan() {
//     if (selectedPlan === "monthly") {
//       setSelectedPlan("yearly");
//     }
//     if (selectedPlan === "yearly") {
//       setSelectedPlan("monthly");
//     }
//   }

  return (
    <main className="flex gap-6 flex-col h-full ">
      <ContentSection
        title=" Select Types of Investments"
        para=" You have different option of Investments."
      />
      <div className=" h-full flex flex-col justify-between ">
        <section className="flex flex-col gap-6">
          <div className=" flex flex-col md:flex-row gap-5 flex-wrap ">
            {investType.map((d, i) => (
              // eslint-disable-next-line react/jsx-key
              <Plan
                title={d.Type}
                imageURl={d.imgurl}
                investPlan={investPlan}
                data={d}
                setinvestPlan={setinvestPlan}
                key={i}
              />
            ))}
          </div>

        </section>
        {/* step btns */}
        <section className="flex  mt-2 justify-between rounded-md w-full ">
          <ButtonF variant="ghost" onClick={prevStep}>
            Go Back
          </ButtonF>
          <ButtonF onClick={nextStep}>Next Step</ButtonF>
        </section>
      </div>
    </main>
  );
}

function Plan({
  imageURl,
  title,
  investPlan,
  setinvestPlan,
  data
}: IPlan) {
  return (
    <div
      onClick={() => setinvestPlan(data)}
      className={cn(
        "flex p-2  border  md:flex-col rounded-md gap-3 cursor-pointer w-32 h-24 items-center ",
        {
          "border-purplish-blue bg-magnolia ":
            data.Type === investPlan.Type
        }
      )}
    >
      <Image
        width={100}
        height={100}
        className="h-10 w-10  "
        // src="/images/icon-arcade.svg"
        src={imageURl}
        alt="notfound"
      />
      <div className="flex  flex-col ">
        <p className="font-semibold capitalize ">{title}</p>
      </div>
    </div>
  );
}
