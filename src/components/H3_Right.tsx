'use client'
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const H3_Right = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 1.0,    // 100% of the element is in view
  });

  return (
    <div ref={ref} className="space-y-6 p-4 md:p-8 max-sm:pl-0">
      <section className="flex border-l-[3px] border-black px-4 py-2 md:mr-7 md:ml-6 mt-3 max-sm:py-3">
        <section>
          {inView && (
            <>
              <p className="text-4xl sm:text-5xl md:text-6xl text-blue-50 font-bold">
                <CountUp end={6000} start={1} />+
              </p>
              <p className="text-sm max-sm:text-xs md:text-lg font-light pt-2">
                people have invested using WeGrow
              </p>
            </>
          )}
        </section>
      </section>
      <section className="flex border-l-[3px] border-black px-4 py-2 md:mr-7 md:ml-6 mt-3 max-sm:py-3">
        <section>
          {inView && (
            <>
              <p className="text-4xl sm:text-5xl md:text-6xl text-blue-50 font-bold">
                <CountUp end={9} start={1} />
              </p>
              <p className="text-sm max-sm:text-xs md:text-lg font-light">
                types of investments
              </p>
            </>
          )}
        </section>
      </section>
    </div>
  );
}

export default H3_Right;
