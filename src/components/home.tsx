'use client'
import Typewriter from "typewriter-effect";
import React from "react"; 
import Image from "next/image";
import face from '../../public/assets/face3.png';
import Card from "./ui/card";
export default function Hom() {
    return (
      <div className="w-full flex flex-row items-center justify-space p-16  mb-32 max-md:p-0 max-sm:flex-col max-sm:p-0  ">
        <div className="flex w-1/2 flex-col items-left justify-center p-8 font-bold text-7xl font-san-serif m-16 md:m-0 max-sm:m-0 max-sm:w-full">
        <div>
        <Card  text={`Hey,`} duration={2} />
        <Card  text={`I'am Sohom`} duration={2} />
        </div>
        {/* <br></br> */}
        <div className="text-3xl p-2 font-semibold">
           
       <Typewriter
  options={{
    strings: ['I am a Developer.', 'I am a Designer.','I am a Tech Geek.'],
    autoStart: true,
    loop: true,
  }}
/>
        </div>
       
           
           
        </div>
        <div className=" flex w-1/2 justify-center pl-16 max-md:pl-0">
            <div>
            <Image
            src={face}
            alt="face"
            className="object-scale-down object-left-top max-w-[360px] m-8 max-md:w-[300px] max-md:m-0 "
            ></Image>  
            </div>
                      
        </div>
      </div>
    );
  }
  