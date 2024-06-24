import { useState } from "react";
import Board from "./Board";
import Footer from "./Footer";
import Header from "./Header";
import Modal from "./Modal";

export default function App() {
  const [showModal, setShowModal] = useState(true);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [difficulty, setDifficulty] = useState<"easy" | "normal" | "hard" | "">(
    ""
  );

  const handleStartGame = (selectedDifficulty: "easy" | "normal" | "hard") => {
    setShowModal(false);
    setDifficulty(selectedDifficulty);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full min-h-screen bg-black font-josefin text-text text-base flex flex-col justify-between items-center py-6">
      {showModal && (
        <Modal
          onClose={handleCloseModal}
          onStartGame={handleStartGame}
          congratulations={gameCompleted}
        />
      )}
      {difficulty && (
        <>
          <Header
            difficulty={difficulty}
            handleDifficultyChange={handleStartGame}
          />
          <Board
            difficulty={difficulty}
            setShowModal={setShowModal}
            setGameCompleted={setGameCompleted}
          />
          <Footer />
        </>
      )}
    </div>
  );
}
