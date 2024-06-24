import { useState } from "react";
import Board from "./Board";
import Footer from "./Footer";
import Header from "./Header";

export default function App() {
  const [difficulty, setDifficulty] = useState<"easy" | "normal" | "hard">(
    "easy"
  );

  const handleDifficultyChange = (difficulty: "easy" | "normal" | "hard") => {
    setDifficulty(difficulty);
  };

  return (
    <div className="w-full min-h-screen bg-black font-josefin text-text text-base flex flex-col justify-between items-center py-6">
      <Header
        difficulty={difficulty}
        handleDifficultyChange={handleDifficultyChange}
      />
      <Board difficulty={difficulty} />
      <Footer />
    </div>
  );
}
