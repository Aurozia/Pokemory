import { useState } from "react";
import Board from "./Board";
import Footer from "./Footer";
import { Header } from "./Header";

export default function App() {
  const [array, setArray] = useState<number[][]>(createArray(4));

  function createArray(size: number) {
    return Array.from({ length: size }, () => Array(size).fill(0));
  }

  return (
    <div className="w-full min-h-screen bg-black font-josefin text-text text-base flex flex-col justify-between items-center py-6">
      <Header setArray={setArray} createArray={createArray} />
      <Board array={array} setArray={setArray} />
      <Footer />
    </div>
  );
}
