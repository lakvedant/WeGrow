'use client'
import React, { useEffect, useState } from "react";
import Faq from "@/components/FAQs";
import Hero from "@/components/Hero";
import PhoneFeautre from "@/components/PhoneFeautre";
import Preloader from "@/components/PreLoader";
import Footer from "@/components/Footer";
import H3_p2 from "@/components/H3_p2";
import ContactUs from "@/components/ContactUs";
import { HeroScrollDemo } from "@/components/Dashboard";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer); // Clean up timer
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <Hero />
      <HeroScrollDemo></HeroScrollDemo>
      <div className="-mt-48">
      <PhoneFeautre />
      </div>

      <H3_p2 />
      <div className='flex items-center justify-center w-full bg-blue-50 py-14'>
      <ContactUs></ContactUs>
      </div>
      <Faq />
      <Footer />
    </>
  );
}
