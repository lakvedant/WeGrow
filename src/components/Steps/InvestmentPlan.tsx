/** @format */
"use client";

import React from "react";
import ContentSection from "../Title";
import ButtonF from "../ButtonF";
import { useForm, SubmitHandler } from "react-hook-form";

interface Step2Props {
  onBack: () => void;
  onNext: (data: Inputs) => void;
}

interface Inputs {
  people: number;
  m_invest: number;
  invest_period: number;
}

const InvestmentPlan: React.FC<Step2Props> = ({ onBack, onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleNext: SubmitHandler<Inputs> = (data) => {
    onNext(data);
  };

  return (
    <div className="flex justify-start flex-col gap-10 h-full">
      <ContentSection
        title="Investment Plan"
        para="Please provide the number of people, monthly investment, and period."
      />
      <form
        onSubmit={handleSubmit(handleNext)}
        className="h-full flex flex-col justify-between"
      >
        <section>
          <div className="mb-5">
            {errors.people && <span>This field is required</span>}
            <label
              htmlFor="people"
              className="block mb-2 text-sm font-normal text-gray-900"
            >
              Number of People
            </label>
            <input
              {...register("people", { required: true })}
              id="people"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter number of people"
              required
              type="number"
            />
          </div>
          <div className="mb-5">
            {errors.m_invest && <span>This field is required</span>}
            <label
              htmlFor="m_invest"
              className="block mb-2 text-sm font-normal text-gray-900"
            >
              Monthly Investment
            </label>
            <input
              {...register("m_invest", { required: true })}
              id="m_invest"
              placeholder="Enter monthly investment amount"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              type="number"
            />
          </div>
          <div className="mb-5">
            {errors.invest_period && <span>This field is required</span>}
            <label
              htmlFor="invest_period"
              className="block mb-2 text-sm font-normal text-gray-900"
            >
              Investment Period in Years
            </label>
            <input
              {...register("invest_period", { required: true })}
              id="invest_period"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter investment period"
              required
              type="number"
            />
          </div>
        </section>
        <div className="flex justify-between mt-2">
          <ButtonF variant="ghost" type="button" onClick={onBack}>
            Go Back
          </ButtonF>
          <ButtonF type="submit">
            Next Step
          </ButtonF>
        </div>
      </form>
    </div>
  );
};

export default InvestmentPlan;
