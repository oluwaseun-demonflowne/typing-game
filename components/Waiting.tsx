
import React from "react";

type Props = {
  counter: number;
};

const Waiting = ({counter}: Props) => {
  return (
    <div>
      <div className="flex relative flex-col items-center justify-center rounded-full">
        <div className="border-8  absolute rounded-full animate-pulse w-44 h-44"></div>
        <p className="text-2xl font-bold">Waiting</p>
        <p className="text-4xl ">{counter}</p>
      </div>
    </div>
  );
};

export default Waiting;
