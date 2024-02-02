"use client";
import React, { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type Props = {
    setTime: Dispatch<SetStateAction<number>>
};

const SingleTimer = ({setTime}: Props) => {
  const change = (i: string) => {
    setTime(parseInt(i))
  };

  return (
    <div className=" flex gap-1 items-center">
      <p className="text-sm font-medium font:bold">Choose time</p>
      <Select onValueChange={change}>
        <SelectTrigger className="w-20">
          <SelectValue className="text-xs" placeholder="Time" />
        </SelectTrigger>
        <SelectContent className="w-20">
          <SelectItem value="3">3 Seconds</SelectItem>
          <SelectItem value="4">4 Seconds</SelectItem>
          <SelectItem value="6">6 seconds</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SingleTimer;
