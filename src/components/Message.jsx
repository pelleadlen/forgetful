import React from "react";

const Message = () => {
  const messages = [
    "Nice, no todos? Press the + to add some",
    "Oops … no todos here, add some maybe?",
    "Can you really remember everything?",
  ];
  const randomMessages = messages[Math.floor(Math.random() * messages.length)];

  return (
    <div className=" min-h-screen -mt-14  flex items-center justify-center text-base md:text-lg lg:text-2xl  tracking-tight text-gray-500 ">
      {randomMessages}
    </div>
  );
};

export default Message;
