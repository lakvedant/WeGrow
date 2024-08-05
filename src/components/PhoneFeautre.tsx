'use client'

import Image from 'next/image'
import React from 'react'
import Lottie from 'react-lottie'
import { Player } from '@lottiefiles/react-lottie-player';
import GradualSpacing from './magicui/gradual-spacing';
import Checkpoint from './Checkpoint';




const PhoneFeautre = () => {
  return (
    <div className='flex mt-14'>
      <Image
      src="/phone.png"
      alt="phone"
      width={500}
      height={800}
      className='ml-28 moveUpDown'
      />
      <div className='ml-28 mt-16 relative'>
          <div className='pl-10'>
            <GradualSpacing
              className="text-left font-display text-4xl max-sm:text-xl font-bold tracking-[-0.1em]  text-blue-50 dark:text-blue-50 md:text-7xl md:leading-[5rem]"
              text="One Stop Solution" 
              duration={2}
            />
            <br />
            <GradualSpacing
              className="text-left font-display text-4xl max-sm:text-xl font-bold tracking-[-0.1em]  text-blue-50 dark:text-blue-50 md:text-7xl md:leading-[5rem]"
              text="Start Today" 
              duration={2}
            />
          </div>
            <Checkpoint></Checkpoint>
          
        </div>
    </div>
  )
}

export default PhoneFeautre

