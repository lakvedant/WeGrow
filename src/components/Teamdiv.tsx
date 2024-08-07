import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Teamdiv = () => {
  return (
    <div className='justify-center w-full gap flex items-center h-[80vh] max-sm:block'>
        <Link href="https://www.linkedin.com/in/lakshit-vedant/" target='_blank'>
            <Image 
            src="/2.svg"
            width={450}
            height={450}
            alt="lv hover"
            className='transition-all duration-500 hover:scale-125 max-sm:transition-none'
            />
        </Link>
        <Image 
        src="/4.svg"
        width={450}
        height={450}
        alt="hp"
        className='transition-all duration-500 hover:scale-125 max-sm:transition-none '
        />
        <Image 
        src="/3.svg"
        width={450}
        height={450}
        alt="ap"
        className='transition-all duration-500 hover:scale-125 max-sm:transition-none '
        />
        
      
    </div>
  )
}

export default Teamdiv
