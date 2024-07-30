'use client'
import TickNumbers from '@/components/TickNumbers'
import React from 'react'
import { ShiftingDropDown } from '@/components/Dropdown'
import Faq from '@/components/FAQs'
import Track from '@/components/Track'
import { Player } from '@lottiefiles/react-lottie-player'

const page = () => {
  return (
    <div>
      <Player
        src='https://lottie.host/4d113c66-ae4d-458d-8b9c-3494bc8449b3/DCAHhA1Ide.json'
        className="w-28 h-28 z-0 "
        loop
        autoplay
        speed={0.5}
/>
    </div>
  )
}

export default page
