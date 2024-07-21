/** @format */
"use client";

import React, { useState } from "react";
import ContentSection from "../Title";
import ButtonF from "../ButtonF";

import { useForm, SubmitHandler } from "react-hook-form";
type InvestmentPlan = {
  nextStep: () => void;
  prevStep: () => void;
};

type Inputs = {
  people: Number;
  m_invest: Number;
  invest_period: Number;
};

export default function InvestmentPlan({ nextStep, prevStep }: InvestmentPlan) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    nextStep();
  };

  console.log("errors", errors);

  return (
    <div className="flex justify-start flex-col  gap-10 h-full">
      <ContentSection
        title=" Investment Plan "
        para="  Please provide no. of people, monthly invesment and period"
      />
      {/* {renderStep()} */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="  h-full flex flex-col justify-between "
      >
        <section>
          <div className="mb-5">
            {errors.people && <span>This field is required</span>}
            <label
              htmlFor="people"
              className="block mb-2 text-sm font-normal text-gray-900 "
            >
              Number of people
            </label>
            <input
              {...register("people", { required: true })}
              // type="text"
              id="people"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter number of people"
              required
              type="Number"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="m_invest"
              className="block mb-2 text-sm font-normal text-gray-900 "
            >
              Monthly Investment
            </label>
            {errors.m_invest && <span>This field is required</span>}
            <input
              {...register("m_invest", { required: true })}
              id="m_invest"
              placeholder="Enter monthly investment amount"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
              type="Number"
            />
          </div>
          <div className="mb-5">
            {errors.invest_period && <span>This field is required</span>}
            <label
              htmlFor="invest_period"
              className="block mb-2 text-sm font-normal text-gray-900 "
            >
              Investment Period
            </label>
            <input
              {...register("invest_period", { required: true })}
              id="invest_period"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Investment Period"
              required
              type="Number"
            />
          </div>
        </section>
        <section className="flex  mt-2 justify-between rounded-md w-full ">
          <ButtonF variant="ghost" onClick={prevStep}>
            Go Back
          </ButtonF>
          <ButtonF onClick={nextStep}>Next Step</ButtonF>
        </section>
      </form>
    </div>
  );
}
