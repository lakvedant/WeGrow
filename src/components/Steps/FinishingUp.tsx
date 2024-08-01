/** @format */
"use client";

import React, { SetStateAction, useState } from "react";
import ContentSection from "../Title";
import ButtonF from "../ButtonF";
import { useAtom } from "jotai";
import ThankYou from "./ThankYou";
import { investTypeAtom } from "@/store/store";
import { InvestmentType } from "@/constants";

interface Step4Props {
  onBack: () => void;
  onConfirm: () => void;
  setActiveStep: React.Dispatch<SetStateAction<number>>;
  formData: {
    hubName: string;
    hubDescription: string;
    people: number;
    m_invest: number;
    invest_period: number;
    investType: InvestmentType;
  };
}

export default function FinishingUp({
  onBack,
  onConfirm,
  setActiveStep,
  formData,
}: Step4Props) {
  const [confirm, setConfirm] = useState(false);
  const [investPlan] = useAtom(investTypeAtom);

  const handleConfirm = () => {
    setConfirm(true);
    onConfirm();
  };

  return (
    <>
      {confirm ? (
        <ThankYou />
      ) : (
        <div className="flex justify-start flex-col gap-5 h-full md:w-[400px]">
          <ContentSection
            title="Finishing up"
            para="Double-check everything looks OK before confirming."
          />
          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col gap-1">
              <section className="bg-magnolia rounded-lg p-5 flex flex-col gap-3">
                <div className="flex justify-between">
                  <div className="flex items-start ">
                    <h3 className="font-semibold text-marine-blue mr-24">
                      Hub Name
                    </h3>
                    <p>{formData.hubName}</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex  items-start">
                    <h3 className="font-semibold text-marine-blue mr-14">
                      Hub Description
                    </h3>
                    <p>{formData.hubDescription}</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex  items-start">
                    <h3 className="font-semibold text-marine-blue mr-[43px]">
                      Number of People
                    </h3>
                    <p>{formData.people}</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex  items-start">
                    <h3 className="font-semibold text-marine-blue mr-8">
                      Monthly Investment
                    </h3>
                    <p>{formData.m_invest}</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex  items-start">
                    <h3 className="font-semibold text-marine-blue mr-[44px]">
                      Investment Period
                    </h3>
                    <p>{formData.invest_period}</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex  items-start">
                    <h3 className="font-semibold text-marine-blue mr-14">
                      Investment Type
                    </h3>
                    <p className="capitalize">{investPlan.Type}</p>

                  </div>
                </div>
              </section>
            </div>
            <section className="flex mt-2 justify-between rounded-md w-full">
              <ButtonF variant="ghost" type="button" onClick={onBack}>
                Go Back
              </ButtonF>
              <ButtonF variant="primary" type="button" onClick={handleConfirm}>
                Confirm
              </ButtonF>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
