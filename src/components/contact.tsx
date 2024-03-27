'use client'
import { motion } from "framer-motion";
import { GlobeDemo } from "./Contact_Globe";
import { ButtonsCard } from "./ui/tailwindcss-buttons";

export default function Contact(){
    return (
        <div className="  justify-center items-center py-16 my-8">
          <div className="flex text-6xl font-bold justify-center w-full mb-8 max-md:text-4xl">Contact Me</div>
          <div className="flex flex-row  justify-center w-full h-[500px]  max-md:flex-col max-md:h-auto">
            <div className="w-[50%] flex justify-center   px-8 max-md:w-[100%] max-md:m-auto max-md:h-[400px]">
                <GlobeDemo></GlobeDemo>
            </div>
            <div className="flex flex-col w-[50%] items-center jsutify-center my-auto mx-auto max-md:w-auto">
            <motion.div
            whileHover={{scale:1.05}}
            transition={{ duration: 1.05 }}

            >
            <button className="relative inline-flex m-8 h-12 w-36 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50  "
             onClick={()=>{
            window.open("mailto:sohomsaha361@gmail.com");

             }}
             >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
             <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
             Email
            </span>
             </button>
            
            </motion.div>
            <motion.div
            whileHover={{scale:1.05,border:'border-slate-200'}}
            transition={{ duration: 1.05 }} >
             <button className="relative inline-flex m-8 h-12 w-36 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50  "
             onClick={()=>{
              window.open("https://drive.google.com/file/d/1nXkT8rjjX3BVbpQhY3b1-b0XV8du4CD4/view?usp=sharing")

             }}
             >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
             <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
             Resume
            </span>
             </button>
             </motion.div>
            </div>
            
          </div>
          
        </div>
    )
}