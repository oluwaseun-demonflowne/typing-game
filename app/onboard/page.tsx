"use client";
import React, { useState } from "react";
import Avatar, { genConfig } from "react-nice-avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Page = () => {
  const [username, setUsername] = useState("");
  const [category, setCategory] = useState("");
  const config = genConfig(username);
  const change = (i: string) => {
    setCategory(i);
  };
  return (
    <form className="flex flex-col items-center justify-center h-[90vh] gap-5">
      <Avatar style={{ width: "4rem", height: "4rem" }} {...config} />
      <input
        required
        onChange={(e) => setUsername(e.currentTarget.value)}
        className="border rounded-sm py-2 w-64 px-1 text-black outline-none text-base"
        placeholder="Choose a nickname"
      />
      <div>
        <p className="text-xs w-64 text-slate-300">
          paste an invite link if you already have a room
        </p>
        <input
          className="border rounded-sm py-2 w-64 px-1 text-black outline-none text-sm"
          placeholder="Paste an invite link"
        />
      </div>
      <Select required onValueChange={change}>
        <SelectTrigger className="w-64">
          <SelectValue placeholder="Choose Play Mode" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Solo">Play Solo</SelectItem>
          <SelectItem value="Duel">Play Duel</SelectItem>
        </SelectContent>
      </Select>
      {category === "Duel" ? (
        <button className="border required: rounded-sm py-2 w-64 px-1 text-black outline-none text-sm">
          Generate an invite link
        </button>
      ) : (
        ""
      )}
      <button className="w-64 border font-bold text-sm py-4 rounded-md">
        Play
      </button>
    </form>
  );
};

export default Page;
