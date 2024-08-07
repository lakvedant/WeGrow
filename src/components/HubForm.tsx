'use client';
import React, { useState, useEffect } from 'react';
import PersonalInfo from './Steps/PersonalInfo';
import InvestmentPlan from './Steps/InvestmentPlan';
import InvestmentType from './Steps/InvestmentType';
import FinishingUp from './Steps/FinishingUp';
import Sidebar, { MobileSidebar } from './Sidebar';
import Particles from './magicui/particles';
import { useClerk } from '@clerk/nextjs'; // Import Clerk hook

const HubForm = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState<any>({});
  const { user } = useClerk(); // Use Clerk hook to get user info

  useEffect(() => {
    if (user) {
      setFormData((prev: any) => ({
        ...prev,
        HubOwner: user.username, // Add username to form data
      }));
    }
  }, [user]);

  const nextStep = (data: any) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = async () => {
    try {
      console.log('Submitting data:', formData); // Log data being sent

      const response = await fetch('/api/hubs', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Form submission successful:', data);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  function RenderStep() {
    switch (activeStep) {
      case 1:
        return <PersonalInfo onNext={nextStep} />;
      case 2:
        return <InvestmentPlan onNext={nextStep} onBack={prevStep} />;
      case 3:
        return <InvestmentType onNext={nextStep} onBack={prevStep} />;
      case 4:
        return (
          <FinishingUp
            setActiveStep={setActiveStep}
            onBack={prevStep}
            onConfirm={handleSubmit}
            formData={formData} // Pass formData to FinishingUp if needed
          />
        );
      default:
        return null;
    }
  }

  return (
    <div className="flex mt-5 w-full md:items-center justify-center p-5 pt-32 md:pt-5">
      <Particles
        className="absolute inset-0"
        quantity={1500}
        ease={80}
        color="#012169"
        refresh
        size={0.7}
        staticity={20}
      />
      <MobileSidebar activeStep={activeStep} />
      <main
        className={`bg-slate-50 z-20 lg:max-h-[600px] w-full max-w-[850px] flex gap-10 p-4 rounded-2xl flex-col md:flex-row drop-shadow 
        }`}
      >
        <Sidebar activeStep={activeStep} />
        <div className="pt-10 lg:w-[650px]">
          <RenderStep />
        </div>
      </main>
    </div>
  );
};

export default HubForm;
