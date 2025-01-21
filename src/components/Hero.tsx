"use client";
import WordRotate from "@/components/magicui/word-rotate";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";
const Hero = () => {
    return(
        <>
            <div className="bgimg1 bg-cover absolute right-0 bottom-0 h-[635px] w-[900px]">
            </div>
            <div className="bgimg2 bg-cover absolute left-0 bottom-0 h-[315px] w-[400px]">
            </div>
                <Image

                src="/mobilehome.png"
                alt="Group"
                width={320}
                height={320}
                className="hidden max-sm:flexCenter max-sm:mt-6 max-sm:ml-14 "
                />
            <div className="mt-16 ml-32 max-sm:ml-8 max-sm:mt-5">
                <h1 className="text-7xl font-bold max-sm:text-4xl">Start Investing your </h1>
                <h1 className="text-7xl font-bold max-sm:text-4xl">Money with your</h1>
                <h1 ><WordRotate
                    className="text-7xl font-bold text-blue-50 max-sm:text-4xl"
                    words={["Group", "Peers","Community"]}
                    duration={2000}
                /></h1>
            </div>
            <div className="ml-32 mt-8 max-sm:ml-8 max-sm:mt-3 inline-block">
                <Link href='/sign-up' >
                    <Button 
                    type="button"
                    title="Lets Get Started"
                    variant="btn_dark_blue"
                    />
                 </Link> 
            </div>
        </>
    )
}

export default Hero
