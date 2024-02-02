import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4 h-[90vh] gap-5">
      <h1 className="text-4xl font-black">Typing speed game</h1>
      <p className="text-sm">
        Challenge your typing skills and compete against others in a race to the
        keyboard at our interactive typing speed test arena!
      </p>
      <button className="border hover:bg-black hover:text-white w-36 rounded-md py-2 px-4 font-bold">Start Game</button>
    </main>
  );
}
