'use client'
import TickNumbers from '@/components/TickNumbers'
import React from 'react'
import { ShiftingDropDown } from '@/components/Dropdown'
import Faq from '@/components/FAQs'
import Track from '@/components/Track'
import { Player } from '@lottiefiles/react-lottie-player'
import ContactUs from '@/components/ContactUs'

const page = () => {
  return (
    <div className='flex items-center justify-center w-full bg-blue-50 py-28'>
      <ContactUs ></ContactUs>
    </div>
  )
}

export default page
