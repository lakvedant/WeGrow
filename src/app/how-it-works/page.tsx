'use client'
import Button from "@/components/Button"
import Image from "next/image"
import Link from "next/link"
import { Player } from '@lottiefiles/react-lottie-player';


const How_it_works = () => {
  return (
    <div className="flex w-full md:items-center justify-center p-5  pt-32 md:pt-5">
      <div className='inline-block mr-36'>
        <Player
        src='https://lottie.host/975b8449-4028-4465-a44c-668d1e5fee04/MMTO5QveeG.json'
        className="h-[45rem] w-[45rem] z-0 "
        loop
        autoplay
        speed={0.5} 
        />
      </div>
      <div className='inline-block bottom-worksButtony left-worksButtonx'>
        <Link href='/hubs/create-hub' >
          <Button
          type="button"
          title="Create Hub"
          variant="worksButton" />
        </Link>
        <Link href='/hubs'>
          <Button
          type="button"
          title="Join Hub"
          variant="worksButton" />
        </Link>

      </div>


    </div>
  )
}

export default How_it_works
