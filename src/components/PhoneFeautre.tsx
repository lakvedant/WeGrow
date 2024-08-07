'use client'

import Image from 'next/image'
import React from 'react'
import Lottie from 'react-lottie'
import { Player } from '@lottiefiles/react-lottie-player';
import GradualSpacing from './magicui/gradual-spacing';
import Checkpoint from './Checkpoint';




const PhoneFeautre = () => {
  return (
    <div className='flex'>
      <Image
      src="/phone.png"
      alt="phone"
      width={500}
      height={800}
      className='ml-28 moveUpDown max-sm:-ml-2 max-sm:mt-36 '
      />
      <div className='ml-28 mt-16 relative max-sm:hidden'>
          <div className='pl-10'>
            <GradualSpacing
              className="text-left font-display text-4xl max-sm:text-xl font-bold tracking-[-0.1em]  text-blue-50 dark:text-blue-50 md:text-7xl md:leading-[5rem]"
              text="Your Path To" 
              duration={2}
            />
            <br />
            <GradualSpacing
              className="text-left font-display text-4xl max-sm:text-xl font-bold tracking-[-0.1em]  text-blue-50 dark:text-blue-50 md:text-7xl md:leading-[5rem]"
              text="Shared Success" 
              duration={2}
            />
          </div>
            <Checkpoint></Checkpoint>
          
        </div>
    </div>
  )
}

export default PhoneFeautre

