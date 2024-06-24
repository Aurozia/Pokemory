interface HeaderProps {
  difficulty: "easy" | "normal" | "hard";
  handleDifficultyChange: (difficulty: "easy" | "normal" | "hard") => void;
}

export default function Header({
  difficulty,
  handleDifficultyChange,
}: HeaderProps) {
  return (
    <header className="bg-primary w-full mb-4 flex justify-between items-center py-2 px-10">
      <section className="w-[150px] text-2xl">
        <a
          className="ring-none outline-none focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-text rounded-sm"
          href="/"
        >
          Pokemory
        </a>
      </section>
      <section className="space-x-4">
        <button
          className={`ring-none outline-none focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-text rounded-sm ${
            difficulty === "easy"
              ? "underline underline-offset-4"
              : "hover:underline hover:underline-offset-4"
          }`}
          onClick={() => handleDifficultyChange("easy")}
        >
          Easy
        </button>
        <button
          className={`ring-none outline-none focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-text rounded-sm ${
            difficulty === "normal"
              ? "underline underline-offset-4"
              : "hover:underline hover:underline-offset-4"
          }`}
          onClick={() => handleDifficultyChange("normal")}
        >
          Normal
        </button>
        <button
          className={`ring-none outline-none focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-text rounded-sm ${
            difficulty === "hard"
              ? "underline underline-offset-4"
              : "hover:underline hover:underline-offset-4"
          }`}
          onClick={() => handleDifficultyChange("hard")}
        >
          Hard
        </button>
      </section>
      <section className="w-[150px] text-right">
        <a
          className="hover:underline hover:underline-offset-4 ring-none outline-none focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-text rounded-sm py-1"
          href="https://aurozia.github.io/"
        >
          Portfolio
        </a>
      </section>
    </header>
  );
}
