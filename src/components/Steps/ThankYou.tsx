/** @format */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";



type Props = {};
import Image from "next/image";

import thankYouImg from "@/assets/images/icon-thank-you.svg";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";

export default function ThankYou({}: Props) {
  return (
    <div className="flex text-center items-center justify-center flex-col gap-4 max-w-[450px] h-full p-5 md:p-0">
      <Player
        src='https://lottie.host/b844a7da-a362-4477-b8e2-8634a935bba3/pfpxNIaJyE.json'
        className="w-48 h-48"
        autoplay 
        speed={0.9} />
      <h3 className="text-marine-blue">Thank you!</h3>
      <p className="text-gray-400">
        Thanks for making your own hub! We hope you find your group and start your investment journey
        If you ever need support, please feel free to email us at
        support@wegrow.com
      </p>
      <Link
      href='/hubs'>Hubs</Link>
    </div>
  );
}
