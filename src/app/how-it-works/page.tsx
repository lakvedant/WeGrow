'use client'
import Button from "@/components/Button"
import Image from "next/image"
import Link from "next/link"
import { Player } from '@lottiefiles/react-lottie-player';
import { Separator } from "@/components/ui/separator"



const How_it_works = () => {
  return (
    <div className="flex w-full md:items-center ml-20 p-5 md:pt-5 relative max-sm:inline-block max-sm:content-center max-sm:ml-6  max-sm:w-80">
      <div className='inline-block mr-36 max-sm:mr-0'>
        <Player
        src='https://lottie.host/975b8449-4028-4465-a44c-668d1e5fee04/MMTO5QveeG.json'
        className="h-[45rem] w-[45rem] z-0 max-sm:w-80 max-sm:h-80 justify-center"
        loop
        autoplay
        speed={0.5} 
        /> 
      </div>
      <div className='inline-block items-center  '>
        <div className="mb-20 top-40 absolute max-sm:relative max-sm:top-0">
          <Link href='/hubs/create-hub' >
            <Button
            type="button"
            title="Create Hub"
            variant="worksButton" />
          </Link>
        </div>
        <div>
          <Link href='/hubs'>
            <Button
            type="button"
            title="Join Hub"
            variant="worksButton" />
          </Link>
        </div>

      </div>


    </div>
  )
}

export default How_it_works
