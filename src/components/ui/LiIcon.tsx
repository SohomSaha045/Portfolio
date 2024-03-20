
import React from "react";
import {motion, useScroll } from "framer-motion"

const LiIcon = ({reference}) => {
    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )
  return (
    <figure className="absolute left-0 stroke-slate-50  ">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle cx="75" cy="50" r="20" className="stroke-white stroke-11 fill-white"/>
              <motion.circle cx="75" cy="50" r="20" className="stroke-[5px] fill-light" 
              style={{
                pathLength: scrollYProgress
              }}/>
              
      </svg>
    </figure>
  );
};

export default LiIcon;
