import Link from 'next/link'
import React from 'react'
import Button from './Button'
import Image from 'next/image'

const ContactUs = () => {
  return (
    <div className='flex'>
      <div className='inline-block w-96 h-[450px] mx-16 relative'>
        <Image src="/q1.svg" alt="q1" width={230} height={110} className='absolute right-3 image-pop-up animation-delay-1'></Image>
        <Image src="/a1.svg" alt="a1" width={230} height={110} className='absolute left-3 top-32 image-pop-up animation-delay-2'></Image>
        <Image src="/q2.svg" alt="q2" width={230} height={110} className='absolute right-3 top-64 image-pop-up animation-delay-3'></Image>
      </div>
      <div className='inline-block items-center pt-24'>
        <div>
          <p className='text-white text-6xl font-semibold pb-3'>Our support team is</p>
          <p className='text-blue-100 text-6xl font-semibold'>active 24x7</p>
        </div>
        <div>
          <p className='text-neutral-700 py-6 w-[500px] text-2xl'>Feel free to chat with our support team whenever you need more clarity</p>
        </div>
        <Link href="mailto:wegrow@support.com">
          <Button 
            type="button"
            title="Contact Us"
            variant="btn_light_blue"
          />
        </Link> 
      </div>
    </div>
  )
}

export default ContactUs
