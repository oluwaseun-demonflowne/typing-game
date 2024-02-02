"use client";
import Waiting from "@/components/Waiting";
import React, { useEffect } from "react";
import Avatar, { genConfig } from "react-nice-avatar";

// type Props = {};

const Page = () => {
  const [counter, setCounter] = React.useState(300);
  // useEffect(() => {
  //   counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  // }, [counter]);


  const config = genConfig("demon");
  return (
    <main className="flex h-[90vh] p-5 flex-col">
      <div className="flex gap-4">
        <div className="flex border gap-2 p-2 rounded-md items-center">
          <Avatar style={{ width: "2rem", height: "2rem" }} {...config} />
          <p className="text-sm">username</p>
          <p className="text-base font-bold">:10</p>
        </div>
        <div className="flex border p-2 gap-2 rounded-md items-center">
          <Avatar style={{ width: "2rem", height: "2rem" }} {...config} />
          <p className="text-sm">username</p>
          <p className="text-base font-bold">:05</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-[100%] h-[100%]">
        {/* <Waiting counter={counter}/> */}
      </div>
    </main>
  );
};

export default Page;
