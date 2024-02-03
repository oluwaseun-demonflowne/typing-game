"use client";
import Waiting from "@/components/Waiting";
import React, { useEffect, useMemo, useState } from "react";
import Avatar, { genConfig } from "react-nice-avatar";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import SingleTimer from "@/components/SingleTimer";

// type Props = {};
let wordArray = [
  "apple",
  "banana",
  "carrot",
  "dog",
  "elephant",
  "flower",
  "guitar",
  "happy",
  "island",
  "jazz",
  "kangaroo",
  "lemon",
  "mountain",
  "notebook",
  "ocean",
  "penguin",
  "quasar",
  "rainbow",
  "sunflower",
  "tiger",
];

const Page = () => {
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

  const myArray = useMemo(() => {
    let newArr = word.split("");
    setArrWord(newArr);
  }, [word]);

  const myAsrray = useMemo(() => {
    setTime(timer);
  }, [timer]);

  useEffect(() => {
    let interval: unknown | number | undefined;

    if (gameStatus) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000); // decrease time every second
    }

    if (!gameStatus) {
      setTime(timer !== 0 ? timer : 0);
      setCounter(0);
      setScore(0)
      setWord("");
      setTypedWord("");
      setTypedArrWord([]);
    }

    return () => {
      clearInterval(interval as number); // clear the interval when the component unmounts or when the game is over
    };
  }, [gameStatus]);

  useEffect(() => {
    if (counter === 10) {
      StopGame()
    }
  }, [counter]);

  useEffect(() => {
    if (time === 0) {
      if (gameStatus === true) {
        setTime(timer);
        setCounter((counter) => counter + 1);
        setWord(wordArray[counter + 1]);
        setTypedWord("");
        setTypedArrWord([]);
      }
    }
  }, [time]); // eslint-disable-line

  useEffect(() => {
    if (typedWord === word) {
      // setTimeout(() => {
      //   setTime(timer - 1);
      // }, 1000);
      setScore((prevScore) => prevScore + 1);
      setTime(timer);
      setCounter((counter) => counter + 1);
      setWord(wordArray[counter + 1]);
      setTypedWord("");
      setTypedArrWord([]);
    }
  }, [typedWord]); // eslint-disable-line

  const changeWord = (e: string) => {
    setTypedWord(e);
  };

  useEffect(() => {
    setTypedArrWord(typedWord.split(""));
  }, [typedWord]);

  useEffect(() => {
    for (let i = 0; i < setArrWord.length; i++) {
      if (
        arrWord[arrTypedWord.length - 1] !==
        arrTypedWord[arrTypedWord.length - 1]
      ) {
        if (typedWord.length > 0) {
          setError(true);
        }
      } else {
        for (let i = 0; i < arrTypedWord.length; i++) {
          if (arrWord[i] !== arrTypedWord[i]) {
            setError(true);
            break;
          }
          setError(false);
        }
        // console.log(arrWord, arrTypedWord)
      }
    }
  }, [arrTypedWord]); //eslint-disable-line
  const startGame = () => {
    setCounter((counter) => counter + 1);
    setGameStatus(true);
    setWord(wordArray[counter]);
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
      <div className="flex items-center gap-4">
        <div className="flex border gap-2 p-2 rounded-md items-center">
          <Avatar style={{ width: "2rem", height: "2rem" }} {...config} />
          <p className="text-sm">username</p>
          <p className="text-base font-bold">{score}:10</p>
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
          value={typedWord}
          // disabled={error}
          // onChange={(e) => setTypedWord(e.currentTarget.value)}
          onChange={(e) => changeWord(e.currentTarget.value)}
          className={`${
            error ? "border-red-700 border-4 rounded-sm" : ""
          } border py-2 px-4 w-64 min-h-36 outline-none`}
          placeholder="Type the word here"
        />
      </div>
      {gameStatus === false ? (
        <button
          onClick={startGame}
          className={`${
            timer < 1 ? "opacity-10 pointer-events-none" : ""
          } border animate-pulse font-bold w-36 rounded-sm text-sm py-2 px-4`}
        >
          Start
        </button>
      ) : (
        <button
          onClick={StopGame}
          className="border bg-red-800 text-white font-bold w-36 rounded-sm text-sm py-2 px-4"
        >
          Stop
        </button>
      )}
    </main>
  );
};

export default Page;
