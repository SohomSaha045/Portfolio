import React from "react";
import { motion } from "framer-motion";
interface skill {
  name:string,
  x:string,
  y:string,
  color:string
}
const Skill = ({ name, x, y,color }:skill) => {
  return (
    <motion.div
      className= {`flex items-center justify-center rounded-full font-semibold text-gray-950 py-3 px-6 shadow-dark cursor-pointer absolute ${color} max-md:px-3 max-md:py-2 `} 
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{once:false}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <div className="w-[85%] h-screen relative flex items-center justify-center rounded-full bg-circularLight max-md:w-[100%] max-md:h-full max-md: my-32">
        
        <motion.div
          className="flex items-center justify-center rounded-full font-bold bg-gray-100 text-gray-950 p-8 shadow-dark cursor-pointer max-md:z-100 max-md:hidden"
          whileHover={{ scale: 1.15 }}
        >
          Skills
        </motion.div>

        <Skill name="HTML" x="-16vw" y="-17vw" color="bg-red-300" />
        <Skill name="CSS" x="-18vw" y="2vw" color="bg-orange-300"/>
        <Skill name="JavaScript" x="15vw" y="7vw" color="bg-amber-300"/>
        <Skill name="Python" x="19vw" y="-5vw" color="bg-yellow-300"/>
        <Skill name="C++" x="0vw" y="11vw" color="bg-lime-300"/>
        <Skill name="ReactJS" x="-20vw" y="-10vw" color="bg-green-300"/>
        <Skill name="ExpressJS" x="10vw" y="-14vw" color="bg-emerald-300"/>
        <Skill name="NodeJS" x="31vw" y="1vw" color="bg-teal-300"/>
        <Skill name="MongoDB" x="0vw" y="-21vw" color="bg-cyan-300"/>
        <Skill name="MySQL" x="-32vw" y="-1vw" color="bg-sky-300"/>
        <Skill name="NextJS" x="-21vw" y="12vw" color="bg-blue-300"/>
        <Skill name="Java" x="15vw" y="15vw" color="bg-indigo-300"/>
        <Skill name="Figma" x="-7vw" y="21vw" color="bg-violet-300"/>
      </div>
    </>
  );
};

export default Skills;