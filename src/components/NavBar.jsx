import React from "react";
import { FabButton } from "./FabButton";

export const NavBar = ({ openModal, setColor }) => (
  <>
    <nav className="w-32 bg-white h-screen pt-8 pl-4 pr-4 pb-0 flex items-center flex-col border-r border-gray-100 ">
      {/* <h1 className=" text-xl font-medium tracking-tighter">forgetfully</h1> */}

      <div className="pt-2">
        <FabButton openModal={openModal} setColor={setColor} />
      </div>
    </nav>
  </>
);
