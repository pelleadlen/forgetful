import React from "react";
import { motion } from "framer-motion";

const Message = () => {
  const messages = [
    "Nice, no todos? Press the + to add some",
    "Oops … no todos here, add some maybe?",
    "Can you really remember everything?",
  ];
  const randomMessages = messages[Math.floor(Math.random() * messages.length)];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" message  text-gray-500 "
    >
      {randomMessages}
    </motion.div>
  );
};

export default Message;
