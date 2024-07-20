'use client';
import React, { useState } from 'react'
import PersonalInfo from './Steps/PersonalInfo';
import SelectPan from './Steps/SelectPan';
import PickAddOns from './Steps/PickAddOns';
import FinishingUp from './Steps/FinishingUp';
import Sidebar, { MobileSidebar } from './Sidebar';
import ThankYou from './Steps/ThankYou';

const HubForm = () => {
    const [activeStep, setActiveStep] = useState(1);

  function nextStep() {
    setActiveStep(activeStep + 1);
  }

  function prevStep() {
    setActiveStep(activeStep - 1);
  }

  function RenderStep() {
    switch (activeStep) {
      case 1:
        return <PersonalInfo nextStep={nextStep} />;
      // Render other steps here
      case 2:
        return <SelectPan nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <PickAddOns nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return (
          <FinishingUp setActiveStep={setActiveStep} prevStep={prevStep} />
        );
      default:
        return null;
    }
  }
  return (
    <div className="flex mt-5 w-full md:items-center justify-center p-5  pt-32 md:pt-5">
      <MobileSidebar activeStep={activeStep} />
      <main className="bg-slate-200 h-[550px] z-20 w-full max-w-[850px] flex gap-10  p-4 rounded-2xl flex-col md:flex-row   ">
        <Sidebar activeStep={activeStep} />
        <div className=" pt-10 lg:w-[650px] ">
          <RenderStep />
        </div>
      </main>
    </div>
  )
}

export default HubForm
