"use client";
import Waiting from "@/components/Waiting";
import React, { useEffect, useMemo, useState } from "react";
import Avatar, { genConfig } from "react-nice-avatar";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

// type Props = {};

const Page = () => {
  const { toast } = useToast();
  const [word, setWord] = useState("Hello world");
  const [typedWord, setTypedWord] = useState("");
  const [arrWord, setArrWord] = useState<string[]>([]);
  const [arrTypedWord, setTypedArrWord] = useState<string[]>([]);
  const [counter, setCounter] = React.useState(300);

  const myArray = useMemo(() => {
    let newArr = word.split("");
    setArrWord(newArr);
  }, [word]);

  useEffect(() => {
    if (typedWord === word) {
      toast({
        title: "Challenge Completed",
        description: "Spelt the text correctly",
        action: <ToastAction altText="Close dialog">Close</ToastAction>,
      });
    }
  }, [typedWord]); // eslint-disable-line

  // console.log(typedWord);
  // console.log(arrTypedWord)
  useEffect(() => {
    let newArr = typedWord.split("");
    setTypedArrWord(newArr);
    for (let i = 0; i < setArrWord.length; i++) {
      console.log(arrWord[arrTypedWord.length - 1], "arr is same");
      console.log(arrTypedWord[arrTypedWord.length - 1], "typedarr is same");
      if (
        arrWord[arrTypedWord.length - 1] !==
        arrTypedWord[arrTypedWord.length - 1]
      ) {
        // console.log();
      } else {
        // console.log("You are correct");
      }

      // console.log("ello")

      // if(i === newArr.length) {
      //     console.log("same with i")
      //     if(newArr[i] === typedWord[i]) {
      //         console.log("same")
      //     }
      // }
    }
  }, [typedWord]); // eslint-disable-line

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
      <div className="flex flex-col gap-4 items-center w-[100%] ">
        {/* <Waiting counter={counter}/> */}
        <p className="text-sm">Type the text below</p>
        <h1 className="text-4xl ">{word}</h1>
        <textarea
          onChange={(e) => setTypedWord(e.currentTarget.value)}
          className="border py-2 px-4 w-64 min-h-36 outline-none"
          placeholder="Type the word here"
        />
      </div>
    </main>
  );
};

export default Page;
