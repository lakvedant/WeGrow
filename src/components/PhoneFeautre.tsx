import Image from 'next/image'
import React from 'react'

const PhoneFeautre = () => {
  return (
    <div>
      <Image
      src="/phone.png"
      alt="phone"
      width={550}
      height={900}
      className='ml-28'
      />
    </div>
  )
}

export default PhoneFeautre
