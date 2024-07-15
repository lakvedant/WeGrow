"use client";
import { SignUp } from '@clerk/nextjs'
import React from 'react'

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
 
import Particles from "@/components/magicui/particles";
 

const SignUpPage = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
 
  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <>
    <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Particles
        className="absolute inset-0"
        quantity={500}
        ease={80}
        color='#012169'
        refresh
        size={0.7}
        staticity={20}
      ></Particles>
      <div className='flex items-center justify-center'>
        <SignUp />
      </div>
    </div>
    </>
  )
};

export default SignUpPage