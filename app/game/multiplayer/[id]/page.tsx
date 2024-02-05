"use client";
import Waiting from "@/components/Waiting";
import SingleTimer from "@components/SingleTimer";
import { useToast } from "@components/ui/use-toast";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Avatar, { genConfig } from "react-nice-avatar";
import { wordArray } from "../../single/[id]/Main";
import { ToastAction } from "@radix-ui/react-toast";

// type Props = {};

const Page = () => {
  const { id: player } = useParams();
  const inputRef = useRef<null | HTMLTextAreaElement>(null);
  const { toast } = useToast();
  const [error, setError] = useState(false);
  const [timer, setTimer] = useState(0);
  const [time, setTime] = useState(0);
  const [counter, setCounter] = React.useState(0);
  const [word, setWord] = useState(wordArray[counter]);
  const [typedWord, setTypedWord] = useState("");
  const [arrWord, setArrWord] = useState<string[]>([]);
  const [arrTypedWord, setTypedArrWord] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState(false);
  const [score, setScore] = useState(0);
  console.log(wordArray[counter], word, counter);
  // useEffect(() => {
  //   counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  // }, [counter]);
  const changeWord = (e: string) => {
    setTypedWord(e);
  };

  const startGame = () => {
    setCounter(counter);
    setGameStatus(true);
    setWord(wordArray[counter]);
    inputRef?.current?.focus();
    // const timeout = setTimeout(() => {
    //   setTime(time => time - 1);
    // }, 100);
  };
  const StopGame = () => {
    setCounter(0);
    toast({
      title: "Game over",
      description: `You had ${score} out of 10`,
      action: <ToastAction altText="Close dialog">Close</ToastAction>,
    });
    setGameStatus(false);
  };
  const config = genConfig("demon");
  return (
    <main className="flex h-[90vh] p-5 flex-col">
      <div className="flex gap-2 flex-col md:flex-row  items-center md:gap-4">
        <div className="flex gap-2">
          <div className="flex border gap-2 p-2 rounded-md items-center">
            <Avatar style={{ width: "2rem", height: "2rem" }} {...config} />
            <p className="text-sm">{player}</p>
            <p className="text-base font-bold">:10</p>
          </div>
          <div className="flex border p-2 gap-2 rounded-md items-center">
            <Avatar style={{ width: "2rem", height: "2rem" }} {...config} />
            <p className="text-sm">username</p>
            <p className="text-base font-bold">:05</p>
          </div>
        </div>
        <div className="flex border p-2 gap-2 rounded-md items-center">
          <p>Timer: {time}</p>
        </div>
        <SingleTimer setTime={setTimer} />
      </div>
      <div
        className={`${
          gameStatus ? "" : "opacity-35 pointer-events-none"
        } flex flex-col mt-8 gap-4 items-center w-[100%] `}
      >
        {/* <Waiting counter={counter}/> */}
        <p className="text-sm">Type the text below</p>
        <h1 className="text-4xl ">{word}</h1>
        <textarea
          ref={inputRef}
          value={typedWord}
          // disabled={error}
          // onChange={(e) => setTypedWord(e.currentTarget.value)}
          onChange={(e) => changeWord(e.currentTarget.value)}
          className={`${
            error ? "border-red-700 border-4 rounded-sm" : ""
          } border py-2 px-4 w-64 min-h-20 outline-none`}
          placeholder="Type the word here"
        />
      </div>
      <div className="flex justify-center">
        {gameStatus === false ? (
          <button
            onClick={startGame}
            className={`${
              timer < 1 ? "opacity-10pointer-events-none" : ""
            } border animate-pulse mt-5 font-bold w-36 rounded-sm text-sm py-2 px-4`}
          >
            Start
          </button>
        ) : (
          <button
            onClick={StopGame}
            className="border bg-red-800 mt-5 text-white font-bold w-36 rounded-sm text-sm py-2 px-4"
          >
            Stop
          </button>
        )}
      </div>
    </main>
  );
};

export default Page;
