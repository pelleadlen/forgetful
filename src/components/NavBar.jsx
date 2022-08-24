import React from "react";
import { FabButton } from "./FabButton";

export const NavBar = ({ openModal, setColor }) => (
  <>
    <nav>
      <div>
        <FabButton openModal={openModal} setColor={setColor} />
      </div>
    </nav>
  </>
);
