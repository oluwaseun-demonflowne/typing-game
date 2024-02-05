"use client";
import { VscCopy } from "react-icons/vsc";
import React, { useState } from "react";
import Avatar, { genConfig } from "react-nice-avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
// import uuid from "uuid"

const Page = () => {
  const { replace } = useRouter();
  const [inviteLink, setInviteLink] = useState("");
  const [username, setUsername] = useState("");
  const [category, setCategory] = useState("");
  const config = genConfig(username);
  const change = (i: string) => {
    setCategory(i);
  };

  const newUuid = uuid().split("-")[0].substring(0,4);

  console.log(inviteLink);

  const generateLink = () => {
    if (username.length < 1) {
      toast.error("Username null");
      return;
    }
    // &from=${"admin"}
    setInviteLink(`gamewith&player=${username}/${newUuid}`);
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(inviteLink);
    toast.success("Copied successfully")
  }


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (category === "Solo") {
      replace(`/game/single/${username}`);
    } else {
      replace(`/game/multiplayer/${username}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center h-[90vh] gap-5"
    >
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
          <SelectItem className="cursor-pointer" value="Solo">
            Play Solo
          </SelectItem>
          <SelectItem className="cursor-pointer" value="Duel">
            Play Duel
          </SelectItem>
        </SelectContent>
      </Select>
      {category === "Duel" ? (
        inviteLink.length > 5 ? (
          <button
            type="button"
            className="flex relative text-wrap border required: rounded-sm py-3 w-64 px-1 text-black outline-none text-xs"
          >
            {inviteLink}<VscCopy onClick={copyLink} className="absolute right-2 top-4"/>
          </button>
        ) : (
          <button
            onClick={generateLink}
            type="button"
            className="border required: rounded-sm py-2 w-64 px-1 text-black outline-none text-sm"
          >
            Generate an invite link
          </button>
        )
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
