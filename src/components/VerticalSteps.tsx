'use client'
import React, { useEffect, useRef, useState } from 'react';

const VerticalSteps: React.FC = () => {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSteps, setVisibleSteps] = useState([true, false, false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepsRef.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleSteps((prevVisibleSteps) => {
                const newVisibleSteps = [...prevVisibleSteps];
                newVisibleSteps[index] = true;
                return newVisibleSteps;
              });
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    stepsRef.current.forEach((step) => {
      if (step) {
        observer.observe(step);
      }
    });

    return () => {
      stepsRef.current.forEach((step) => {
        if (step) {
          observer.unobserve(step);
        }
      });
    };
  }, []);

  const steps = [
    'Step 1: Create a Hub.',
    'Step 2: Choose Investment Type.',
    'Step 3: Set Investment Goal',
    'Step 4: Share it With Your Friends.',
    'Step 5: Invest and Grow Together.',
  ];

  return (
    <div className="flex flex-col justify-start pt-32 p-5 pl-1 pr-1 max-sm:ml-8">
      {steps.map((text, index) => (
        <div
          key={index}
          className={`relative flex items-center opacity-0 transition-opacity duration-500 ease-in-out mb-20 max-sm:mb-14 transform ${
            visibleSteps[index] ? 'opacity-100 translate-x-0' : 'translate-x-10'
          }`}
          ref={(el) => {
            stepsRef.current[index] = el;
          }}
        >
          <div
            className={`bg-blue-50 text-white w-10 h-10 rounded-full  flex items-center justify-center mr-5 font-bold transition-colors duration-500 ${
              visibleSteps[index] ? '' : ''
            }`}
          >
            {index + 1}
          </div>
          <div
            className={`text-lg'text-black transition-colors duration-500 ${
              visibleSteps[index] ? 'text-black' : ''
            }`}
          >
            {text}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`absolute top-full left-[5.5%] w-px h-20 bg-blue-50 transition-colors duration-500 ${
                visibleSteps[index] ? 'bg-blue-50' : ''
              }`}
              style={{ transform: 'translateX(-50%)' }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default VerticalSteps;
