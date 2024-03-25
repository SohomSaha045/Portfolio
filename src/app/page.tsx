"use client";
import { Navbar } from "@/components/navbar";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import UP from '@/../../public/up.svg'
import Hom from "@/components/home";
import TypewriterComponent from "typewriter-effect";
import About from "@/components/about";
import { Project } from "@/components/projects";
import Contact from "@/components/contact";
import { useEffect, useState } from "react";
import Image from "next/image";
const isBrowser = () => typeof window !== 'undefined'; 
export default function Home() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setShowButton(scrollY > 20); // Show button after 20px scroll
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div
        className=" fixed bottom-20 right-10 z-50 hidden text-white cursor-pointer rounded-full px-4 py-3 
        inline-flex h-18 w-18 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400  "
        style={{ display: showButton ? "block" : "none" }}
        onClick={()=>{
          if (!isBrowser()) return;
          window.scrollTo({ top: 0, behavior: 'smooth' });}}
      >
        <Image src={UP} alt='UP' className="object-scale-down h-4 w-4 rounded-full"></Image>
      </div>

      <Navbar></Navbar>
      <section id="1" className="p-0  mt-16">
        <Hom></Hom>
      </section>
      <section id="2">
        <About></About>
        <MacbookScroll></MacbookScroll>
      </section>
      <section id="3">
        <Project></Project>
      </section>
      <section id="4" className="w-full">
        <Contact></Contact>
      </section>
    </main>
  );
}
