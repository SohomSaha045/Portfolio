import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-gray-100 text-gray-950 py-3 px-6 shadow-dark cursor-pointer absolute"
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
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-bold bg-gray-100 text-gray-950 p-8 shadow-dark cursor-pointer "
          whileHover={{ scale: 1.15 }}
        >
          Skills
        </motion.div>

        <Skill name="HTML" x="-5vw" y="-11vw" />
        <Skill name="CSS" x="-20vw" y="2vw" />
        <Skill name="JavaScript" x="15vw" y="7vw" />
        <Skill name="Python" x="19vw" y="-4vw" />
        <Skill name="C++" x="0vw" y="11vw" />
        <Skill name="ReactJS" x="-20vw" y="-10vw" />
        <Skill name="ExpressJS" x="10vw" y="-14vw" />
        <Skill name="NodeJS" x="32vw" y="-5vw" />
        <Skill name="MongoDB" x="0vw" y="-21vw" />
        <Skill name="MySQL" x="-32vw" y="-1vw" />
        <Skill name="NextJS" x="-21vw" y="12vw" />
        <Skill name="Java" x="28vw" y="14vw" />
        <Skill name="Figma" x="2vw" y="21vw" />
      </div>
    </>
  );
};

export default Skills;