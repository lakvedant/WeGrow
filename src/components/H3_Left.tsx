'use client'
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const H3_Left = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 1.0,    // 100% of the element is in view
  });

  return (
    <div ref={ref} className=" max-sm:pr-0 max-sm:pl-0">
      <p className="text-2xl max-sm:text-xl md:text-4xl lg:text-5xl font-bold pb-4">
        Investments made so far on  <br className="hidden md:block" />WeGrow
      </p>
      {inView && (
        <p className="text-blue-50 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold">
          <CountUp end={2000000} />+
        </p>
      )}
      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light pt-5">
        Start your investment journey with WeGrow
      </p>
    </div>
  );
}

export default H3_Left;
