import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import { motion } from "framer-motion";

const buttons = [
  { key: "blue", color: "bg-blue-400" },
  { key: "orange", color: "bg-orange-400", marginTop: "mt-2" },
  { key: "green", color: "bg-green-400", marginTop: "mt-2" },
  { key: "purple", color: "bg-purple-400", marginTop: "mt-2" },
  { key: "pink", color: "bg-pink-400", marginTop: "mt-2" },
];

const containerVariants = {
  open: {
    height: `240px`,
    transition: {
      duration: 0.1,
      staggerChildren: 0.09,
    },
  },
  closed: {
    height: `240px`,
    transition: {
      staggerChildren: 0.02,
      when: "afterChildren",
      staggerDirection: -1,
    },
  },
};

const childVariants = {
  open: {
    opacity: 1,
    translateY: `1rem`,
    transition: {
      duration: 0.1,
      type: "spring",
      stiffness: 60,
    },
  },
  closed: {
    opacity: 0,
    translateY: `-1rem`,
    transition: {
      type: "spring",
      stiffness: 60,
    },
  },
};

export function FabButton({ openModal, setColor }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div
        className="flex flex-col items-center"
        initial={`closed`}
        animate={isOpen ? `open` : `closed`}
        variants={containerVariants}
      >
        {/* ---fab-- */}
        <motion.div
          className=" z-10  h-10 w-10 rounded-full bg-black flex items-center justify-center"
          animate={{ rotate: isOpen ? 180 + 45 : 0 }}
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AddIcon className="text-white" />
        </motion.div>
        {/* ---fab-- */}

        {/* ---color-buttons-- */}

        {buttons.map(({ key, color, marginTop }) => (
          <motion.button
            whileHover={{ scale: 1.1 }}
            className={`flex flex-col border-black border h-6 w-6 rounded-full ${color} ${marginTop}`}
            initial={{ opacity: 0, scale: 1 }}
            variants={childVariants}
            key={key}
            onClick={() => {
              setColor(key);
              openModal();
            }}
          ></motion.button>
        ))}
        {/* ---color-buttons-- */}
      </motion.div>
    </>
  );
}

export default FabButton;
