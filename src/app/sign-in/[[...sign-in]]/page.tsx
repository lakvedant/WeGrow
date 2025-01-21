"use client";
import { SignIn } from '@clerk/nextjs'
import React from 'react'


import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
 
import Particles from "@/components/magicui/particles";

const SignInPage = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
 
  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <>
    <div className="relative flex h-[800px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Particles
        className="absolute inset-0"
        quantity={500}
        ease={80}
        color='#012169'
        refresh
        size={0.7}
        staticity={20}
      ></Particles>
      <div className='flex items-center justify-center absolute top-20 max-sm:top-24'>
        <SignIn />
      </div>
    </div>
    </>
  )
}

export default SignInPage
