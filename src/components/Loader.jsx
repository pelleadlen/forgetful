import React from "react";
import { motion } from "framer-motion";
import "../App.css";

export function Loader() {
  return (
    <motion.div
      initial={{ y: `+20px`, opacity: 0 }}
      animate={{ y: `0`, opacity: 1 }}
      transition={{ duration: 4, type: "spring", stiffness: 50 }}
      className="flex flex-col h-screen w-full items-center justify-center  "
    >
      <div className="flex gap-1 mb-1">
        <div className=" letter w-24 h-28 flex items-center justify-center pl-8 pr-8 pt-2 pb-2 bg-green-400 border-2 rounded border-black">
          <h1 className="text-8xl text-white   ">F</h1>
        </div>
        <div className=" letter w-24 h-28 flex items-center justify-center pl-8 pr-8 pt-2 pb-2 bg-purple-400 border-2 rounded border-black">
          <h1 className="text-8xl text-white   ">O</h1>
        </div>
        <div className=" letter w-24 h-28 flex items-center justify-center pl-8 pr-8 pt-2 pb-2 bg-red-300 border-2 rounded border-black">
          <h1 className="text-8xl text-white   ">R</h1>
        </div>
      </div>

      <div className="flex gap-1 mb-1">
        <div className=" letter w-24 h-28  flex items-center justify-center pl-8 pr-8 pt-2 pb-2 bg-blue-400 border-2 rounded border-black">
          <h1 className="text-8xl text-white   ">G</h1>
        </div>
        <div className=" letter w-24 h-28  flex items-center justify-center pl-8 pr-8 pt-2 pb-2 bg-green-400 border-2 rounded border-black">
          <h1 className="text-8xl text-white   ">E</h1>
        </div>
        <div className=" letter w-24 h-28  flex items-center justify-center pl-8 pr-8 pt-2 pb-2 bg-purple-300 border-2 rounded border-black">
          <h1 className="text-8xl text-white   ">T</h1>
        </div>
      </div>

      <div className="flex gap-1">
        <div className=" letter w-24 h-28 flex items-center justify-center pl-8 pr-8 pt-2 pb-2 bg-red-300 border-2 rounded border-black">
          <h1 className="text-8xl text-white   ">F</h1>
        </div>
        <div className=" letter w-24 h-28 flex items-center justify-center pl-8 pr-8 pt-2 pb-2 bg-purple-400 border-2 rounded border-black">
          <h1 className="text-8xl text-white   ">U</h1>
        </div>
        <div className=" letter w-24 h-28 flex items-center justify-center pl-8 pr-8 pt-2 pb-2 bg-yellow-500 border-2 rounded border-black">
          <h1 className="text-8xl text-white   ">L</h1>
        </div>
      </div>
    </motion.div>
  );
}
