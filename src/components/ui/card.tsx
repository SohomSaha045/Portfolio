// 'use client'
import React from "react";
import { motion } from "framer-motion";

function Card( {text,duration} ) {
  return (
    <motion.div
      className="card p-2"
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        y: -80
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y:0, // Slide in to its original position
        transition: {
          duration: duration // Animation duration
        }
      }}
      viewport={{ once: false }}
      
    >
      <p className="card-text">{text}</p>
    </motion.div>
  );
}

export default Card;
