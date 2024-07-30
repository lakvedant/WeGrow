'use client'
import React, { useEffect, useState } from "react";
import Faq from "@/components/FAQs";
import Hero from "@/components/Hero";
import PhoneFeautre from "@/components/PhoneFeautre";
import Preloader from "@/components/PreLoader";
import TickNumbers from "@/components/TickNumbers";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
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
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <PhoneFeautre />
      <Faq />
    </>
  );
}
