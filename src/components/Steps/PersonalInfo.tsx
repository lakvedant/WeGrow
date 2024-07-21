/** @format */
"use client";

import React, { useState } from "react";
import ContentSection from "../Title";
import ButtonF from "../ButtonF";

import { useForm, SubmitHandler } from "react-hook-form";
type Props = {
  nextStep: () => void;
};

type Inputs = {
  hubName: string;
  hubDescription: string;
};

export default function PersonalInfo({ nextStep }: Props) {
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
        title=" Hub Info"
        para="  Please provide your hub name and hub description."
      />
      {/* {renderStep()} */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="  h-full flex flex-col justify-between "
      >
        <section>
          <div className="mb-5">
            {errors.hubName && <span>This field is required</span>}
            <label
              htmlFor="hubName"
              className="block mb-2 text-sm font-normal text-gray-900 "
            >
              Hub Name
            </label>
            <input
              {...register("hubName", { required: true })}
              // type="text"
              id="hubName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter your hub name"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="hubDescription"
              className="block mb-2 text-sm font-normal text-gray-900 "
            >
              Hub Description
            </label>
            {errors.hubDescription && <span>This field is required</span>}
            <input
              {...register("hubDescription", { required: true })}
              id="hubDescription"
              placeholder="Enter your hub description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            />
          </div>
        </section>

        <div className="flex justify-end">
          <ButtonF>Next Step</ButtonF>
        </div>
      </form>
    </div>
  );
}
