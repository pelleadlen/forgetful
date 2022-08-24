import React from "react";
import { motion } from "framer-motion";

const text = [
  { letter: "F", bg: "rgb(74 222 128)" },
  { letter: "O", bg: "rgb(192 132 252)" },
  { letter: "R", bg: "rgb(252 165 165)" },
  { letter: "G", bg: "rgb(96 165 250)" },
  { letter: "E", bg: "rgb(74 222 128)" },
  { letter: "T", bg: "rgb(216 180 254)" },
  { letter: "F", bg: "rgb(252 165 165)" },
  { letter: "U", bg: "rgb(192 132 252)" },
  { letter: "L", bg: "rgb(234 179 8)" },
];

export const Loader = () => {
  const moveOut = {
    initial: {
      opacity: 1,
      y: 0,
    },
    animate: {
      opacity: 0,
      y: -100,
      transition: {
        delay: 4,
        duration: 0.5,
      },
    },
  };

  const parent = {
    initial: {
      opacity: 0,
    },
    viewed: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const child = {
    initial: {
      opacity: 0,
      y: -20,
    },
    viewed: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        variants={moveOut}
        className="flex flex-col  h-screen w-full items-center justify-center  "
      >
        <motion.ul
          className="lettergrid"
          variants={parent}
          initial="initial"
          animate="viewed"
        >
          {text.map(({ letter, bg }, index) => (
            <motion.li
              className="letters"
              variants={child}
              style={{ backgroundColor: `${bg}` }}
              key={index}
            >
              {letter}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </>
  );
};
