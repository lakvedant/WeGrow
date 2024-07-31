import Link from 'next/link'
import React from 'react'
import Button from './Button'

const ContactUs = () => {
  return (
    <div >
        <div>
            <video src="/Ria.mp4" loop autoPlay />
        </div>
      <div>
        <div>
        <p className='text-white text-6xl font-semibold pb-3'>Our support team is</p>
        <p className='text-blue-100 text-6xl font-semibold'>active 24x7</p>
        </div>
        <div>
            <p className='text-neutral-700 py-6 w-[500px] text-2xl'>Feel free to chat with our support team whenever you need more clarity</p>
        </div>
        <Link href='/sign-up'>
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
