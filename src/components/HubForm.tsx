'use client';
import React, { useState } from 'react'
import PersonalInfo from './Steps/PersonalInfo';
// import PickAddOns from './Steps/PickAddOns';
import FinishingUp from './Steps/FinishingUp';
import Sidebar, { MobileSidebar } from './Sidebar';
import ThankYou from './Steps/ThankYou';
import InvestmentPlan from './Steps/InvestmentPlan';
import InvestmentType from './Steps/InvestmentType';
import Particles from './magicui/particles';

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
        return <InvestmentPlan nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <InvestmentType nextStep={nextStep} prevStep={prevStep} />;
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
        <Particles
        className="absolute inset-0"
        quantity={1500}
        ease={80}
        color='#012169'
        refresh
        size={0.7}
        staticity={20}
      ></Particles>
      <MobileSidebar activeStep={activeStep} />
      <main className="bg-slate-50 h-[550px] z-20 w-full max-w-[850px] flex gap-10  p-4 rounded-2xl flex-col md:flex-row drop-shadow  ">
        <Sidebar activeStep={activeStep} />
        <div className=" pt-10 lg:w-[650px] ">
          <RenderStep />
        </div>
      </main>
    </div>
  )
}

export default HubForm
