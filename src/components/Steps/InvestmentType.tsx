/** @format */

"use client";

import React from "react";
import { InvestmentType, investType } from "@/constants";
import ContentSection from "../Title";
import ButtonF from "../ButtonF";
import { useAtom } from "jotai";
import { investTypeAtom } from "@/store/store";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Step3Props {
  onBack: () => void;
  onNext: (data: InvestmentType) => void;
}

const SelectPlan: React.FC<Step3Props> = ({ onBack, onNext }) => {
  const [investPlan, setInvestPlan] = useAtom(investTypeAtom);

  const handleNext = () => {
    if (investPlan) {
      onNext(investPlan);
    }
  };

  return (
    <main className="flex gap-6 flex-col h-full ">
      <ContentSection
        title="Select Types of Investments"
        para="You have different options of Investments."
      />
      <div className="h-full flex flex-col justify-between">
        <section className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-5 flex-wrap">
            {investType.map((d, i) => (
              <Plan
                title={d.Type}
                imageURl={d.imgurl}
                investPlan={investPlan}
                data={d}
                setInvestPlan={setInvestPlan}
                key={i}
              />
            ))}
          </div>
        </section>
        <section className="flex mt-2 justify-between rounded-md w-full">
          <ButtonF variant="ghost" type="button" onClick={onBack}>
            Go Back
          </ButtonF>
          <ButtonF variant="primary" type="button" onClick={handleNext}>
            Next Step
          </ButtonF>
        </section>
      </div>
    </main>
  );
};

interface PlanProps {
  imageURl: string;
  title: string;
  investPlan: InvestmentType;
  setInvestPlan: React.Dispatch<React.SetStateAction<InvestmentType>>;
  data: InvestmentType;
}

const Plan: React.FC<PlanProps> = ({ imageURl, title, investPlan, setInvestPlan, data }) => {
  return (
    <div
      onClick={() => setInvestPlan(data)}
      className={cn(
        "flex p-2 border md:flex-col rounded-md gap-3 cursor-pointer w-32 h-24 items-center",
        {
          "border-purplish-blue bg-magnolia": data.Type === investPlan.Type,
        }
      )}
    >
      <Image
        width={100}
        height={100}
        className="h-10 w-10"
        src={imageURl}
        alt={title}
      />
      <div className="flex flex-col">
        <p className="font-semibold capitalize">{title}</p>
      </div>
    </div>
  );
};

export default SelectPlan;