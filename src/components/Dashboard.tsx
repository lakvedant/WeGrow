"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import VerticalSteps from "./VerticalSteps";

export function HeroScrollDemo() {
  return (
    <div className="flex overflow-hidden justify-start max-sm:block">
      <ContainerScroll
        titleComponent={
          <>
            <br /><br />
          </>
        }
      >
      
        <Image
          src={`/dashboard.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <div className=" flex items-center max-sm:">
      <VerticalSteps />
      </div>
    </div>
  );
}
