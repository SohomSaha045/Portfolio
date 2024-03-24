"use client";

import Card from "./ui/card";
import React from "react";
import LinkedIn from "@/../../public/assets/image.png";
import { PinContainer } from "./ui/pin";
import Image from "next/image";
import Skills from "./ui/skills";
import Education from "./ui/education";
import { CardBody, CardContainer,CardItem } from "./ui/card-3D";
import Link from "next/link";

export default function About() {
  return (
    <div className=" flex flex-col items-center  p-0 mt-8  ">
      <div className="flex font-bold text-6xl m-0 pt-24 pb-12 w-full justify-center ">
        <Card text={`Eagerness Inspires Progress.`} duration={1} />
      </div>
      <div className=" flex flex-row  w-full mt-16 p-0">
        <div className="p-8 pl-32 w-2/3">
          <div className="font-bold text-xl">ABOUT ME</div>
          <div className="pl-4 pt-4">
            <div className=" pt-4 text-base font-semibold">
              - Greetings, I'm Sohom Saha, a proficient FullStack developer ,
              driven by a fervor for crafting exquisite, pragmatic, and
              user-centric digital interfaces
            </div>
            <div className=" pt-4 text-base font-semibold">
              - I hold the conviction that design transcends mere aesthetics;
              it's a means to tackle challenges and foster seamless, delightful
              interactions for users.
            </div>

            <div className=" pt-4 text-base font-semibold">
              - I have extensive experience in web development using various
              technologies such as React, Node.js, Socket.io, Express, MongoDB,
              MySQL, Next.js. These tools enable me to create dynamic and
              efficient web applications, and I'm always eager to explore new
              technologies and expand my skill set.
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            window.location.href =
              "https://www.linkedin.com/in/sohom-saha-339593215/";
          }}
        >
        <CardContainer className="inter-var">
         <CardBody className=" bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem] h-auto rounded-xl px-8 border  ">
        

        <CardItem translateZ="100" className="w-full mt-4 justify-center items-center cursor-grabbing">
          <Image
            src={LinkedIn}
          
            className=" w-[75%] h-[75%] object-scaledown rounded-xl group-hover/card:shadow-xl mx-auto"
            alt="thumbnail"
          />
        </CardItem>
        
      </CardBody>
    </CardContainer>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center p-16 m-8 mt-16">
        <div className="flex w-full items-center justify-center font-bold text-6xl m-12">
          Skills
        </div>
        <Skills></Skills>
      </div>
      
       <Education></Education>
      
    </div>
  );
}
