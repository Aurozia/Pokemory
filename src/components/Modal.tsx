import { useState } from "react";

interface ModalProps {
  onClose: () => void;
  onStartGame: (difficulty: "easy" | "normal" | "hard") => void;
  congratulations: boolean;
}

export default function Modal({
  onClose,
  onStartGame,
  congratulations,
}: ModalProps) {
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    "easy" | "normal" | "hard" | ""
  >("");

  const handleStartGame = (difficulty: "easy" | "normal" | "hard") => {
    setSelectedDifficulty(difficulty);
    onStartGame(difficulty);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-hover px-4 py-8 sm:p-8 rounded-lg shadow-lg max-w-md w-full max-sm:mx-5">
        {congratulations ? (
          <>
            <h2 className="text-2xl mb-4 text-center">
              Congratulations young trainer!
            </h2>
            <p className="text-center mb-6">Choose a (new) difficulty:</p>
          </>
        ) : (
          <>
            <h2 className="text-2xl mb-4 text-center">
              Welcome young trainer!
            </h2>
            <p className="text-center mb-6">Choose a difficulty:</p>
          </>
        )}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleStartGame("easy")}
            className={`px-4 py-2 ring-none outline-none focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-text rounded-md bg-primary/50 hover:bg-primary hover:scale-110 transform transition-transform text-white ${
              selectedDifficulty === "easy" ? "bg-black" : ""
            }`}
          >
            Easy
          </button>
          <button
            onClick={() => handleStartGame("normal")}
            className={`px-4 py-2 ring-none outline-none focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-text rounded-md bg-primary/50 hover:bg-primary hover:scale-110 transform transition-transform text-white ${
              selectedDifficulty === "normal" ? "bg-black" : ""
            }`}
          >
            Normal
          </button>
          <button
            onClick={() => handleStartGame("hard")}
            className={`px-4 py-2 ring-none outline-none focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-text rounded-md bg-primary/50 hover:bg-primary hover:scale-110 transform transition-transform text-white ${
              selectedDifficulty === "hard" ? "bg-black" : ""
            }`}
          >
            Hard
          </button>
        </div>
      </div>
    </div>
  );
}
