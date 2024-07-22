import React from 'react'
import NumberTicker from "@/components/magicui/number-ticker";

const TickNumbers = () => {
  return (
    <div className='justify-center w-full flex items-center'>
      <div>
        <p className='bold-40'>Hubs so far created at Wegrow</p>
        <p className="whitespace-pre-wrap text-7xl tracking-tighter text-black font-bold mt-4">
          <NumberTicker value={250} direction='up' />
        </p>
      </div>
    </div>
  )
}

export default TickNumbers

