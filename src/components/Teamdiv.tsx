/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Teamdiv = () => {
  return (
    <div>
    <div className="pt-12 px-4 sm:px-8 lg:px-20">
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold text-blue-50">About Our Company</h1>
      <p className="mt-4">
        Isn't today's generation all about being digital?<br />
        Are we all not accustomed to the one-click google solution for all our guesses?<br />
        Don't we all need a one-stop destination for all our investment?
      </p>
    </div>
    <div className="">

      <div className="flex flex-col lg:flex-row items-center lg:justify-center">
        <div className="lg:w-1/2 p-6 lg:p-10">
          <Card className="w-full lg:w-[500px]">
            <CardHeader>
              <CardTitle className="text-blue-50">WHO WE ARE</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
            Wegrow is a pioneering investment platform where individuals can collaboratively invest in various domains. Users can create multiple hubs, setting the investment domain, monthly contribution, and participant number, fostering a community-driven approach to investment. Our mission is to democratize investing, providing tools and insights for informed decision-making and maximizing returns. Join Wegrow to be part of a transformative, collective investment experience
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
        <Image 
          src='/aboutus_1.png' 
          alt='About Us 1' 
          width={450} 
          height={200}         />
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:justify-center">
        <Image 
          src='/aboutus_2.jpg' 
          alt='About Us 2' 
          width={450} 
          height={200}         />
        <div className="lg:w-1/2 p-6 lg:p-10">
          <Card className="w-full lg:w-[500px]">
            <CardHeader>
              <CardTitle className="text-blue-50">WHAT WE DO</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
            At Wegrow, we facilitate collective investment through customizable hubs. Our platform enables users to invest together in diverse domains, offering tools for setting investment amounts, managing participant numbers, and tracking performance. We specialize in providing a collaborative investment environment, leveraging technology to enhance transparency and decision-making. Wegrow is dedicated to empowering individuals with innovative solutions for achieving financial growth and maximizing investment potential
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:justify-center">
        <div className="lg:w-1/2 p-6 lg:p-10">
          <Card className="w-full lg:w-[500px]">
            <CardHeader>
              <CardTitle className="text-blue-50">OUR MISSION</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
            Our mission at Wegrow is to democratize investment by enabling individuals to collaboratively invest in diverse domains through customizable hubs. We strive to provide a user-friendly platform that promotes transparency, trust, and informed decision-making. By offering innovative tools and fostering a supportive community, we aim to empower users to achieve their financial goals and maximize their investment potential, driving collective growth and success.
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
        <Image 
          src='/aboutus_3.jpg' 
          alt='About Us 3' 
          width={450} 
          height={200} 
        />
      </div>

    </div>
        <h1 className="text-center text-6xl text-blue-50 pt-10 font-bold max-sm:text-4xl">Team Members</h1>
         <div className='justify-center w-full gap flex items-center h-[80vh] max-sm:block p-3'>
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
            
          
          {/* </div> */}
        </div> 
    </div>
    </div>
  )
}

export default Teamdiv
