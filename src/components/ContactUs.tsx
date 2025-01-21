import Link from 'next/link';
import React from 'react';
import Button from './Button';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center max-sm:space-y-8 sm:space-y-0'>
      <div className='w-full sm:w-96 h-[450px] relative mx-4 sm:mx-16'>
        <Image src="/q1.svg" alt="q1" width={230} height={110} className='absolute right-3 image-pop-up animation-delay-1' />
        <Image src="/a1.svg" alt="a1" width={230} height={110} className='absolute left-3 top-32 image-pop-up animation-delay-2' />
        <Image src="/q2.svg" alt="q2" width={230} height={110} className='absolute right-3 top-64 image-pop-up animation-delay-3' />
      </div>
      <div className='text-center sm:text-left sm:pt-24 sm:px-8 max-sm:px-4'>
        <div>
          <p className='text-white text-4xl sm:text-6xl font-semibold pb-3'>Our support team is</p>
          <p className='text-blue-100 text-4xl sm:text-6xl font-semibold'>active 24x7</p>
        </div>
        <div>
          <p className='text-neutral-700 py-6 max-sm:text-lg sm:text-2xl sm:w-[500px]'>Feel free to chat with our support team whenever you need more clarity</p>
        </div>
        <div className='justify-start flex max-sm:justify-center'>
          <Link href="mailto:wegrow.pvt@gmail.com">
            <Button 
              type="button"
              title="Contact Us"
              variant="btn_light_blue"
            />
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
