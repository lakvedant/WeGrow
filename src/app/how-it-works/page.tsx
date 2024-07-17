import Button from "@/components/Button"
import Image from "next/image"
import Link from "next/link"


const How_it_works = () => {
  return (
    <div>
      <div className='inline-block ml-48 mt-6'>
        <Image src="/team_2.jpg" alt="join or create hub" width={650} height={650} />
      </div>
      <div className='inline-block absolute bottom-worksButtony left-worksButtonx '>
        <Link href='/hubs/create-hub'>
          <Button
          type="button"
          title="Create Hub"
          variant="worksButton" />
        </Link>

      </div>


    </div>
  )
}

export default How_it_works
