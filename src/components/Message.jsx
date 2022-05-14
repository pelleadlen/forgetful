import React from "react";

const Message = () => {
  const messages = [
    "Nice, no todos? Press the + to add some",
    "Oops … no todos here, add some maybe?",
    "Can you really remember everything?",
  ];
  const randomMessages = messages[Math.floor(Math.random() * messages.length)];

  return (
    <div className=" w-screen h-screen -ml-32 pl-32 pr-16 -mt-14 flex justify-center items-center">
      <p className="mx-auto sm:text-lg md:text-2xl  tracking-tight text-gray-500 ">
        {randomMessages}
      </p>
    </div>
  );
};

export default Message;
