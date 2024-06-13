interface HeaderProps {
  setArray: React.Dispatch<React.SetStateAction<number[][]>>;
  createArray: (size: number) => number[][];
}

export const Header: React.FC<HeaderProps> = ({ setArray, createArray }) => {
  const handleSizeChange = (newSize: number) => {
    setArray(createArray(newSize));
  };

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
          className="hover:underline hover:underline-offset-4 ring-none outline-none focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-text rounded-sm"
          onClick={() => handleSizeChange(4)}
        >
          Easy
        </button>
        <button
          className="hover:underline hover:underline-offset-4 ring-none outline-none focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-text rounded-sm"
          onClick={() => handleSizeChange(6)}
        >
          Normal
        </button>
        <button
          className="hover:underline hover:underline-offset-4 ring-none outline-none focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-text rounded-sm"
          onClick={() => handleSizeChange(8)}
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
};
