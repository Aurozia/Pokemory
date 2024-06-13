import Pokeball from "./../assets/pokeballIcon.svg";

interface Props {
  array: number[][];
}

export default function Board({ array }: Props) {
  return (
    <main>
      {array.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex justify-center items-center gap-4 py-2"
        >
          {row.map((_, colIndex) => (
            <button
              key={`${rowIndex}-${colIndex}`}
              className="bg-hover rounded-sm size-[120px]"
            >
              <img
                src={Pokeball}
                alt="Pokeball"
                className="mx-auto size-[70px]"
              />
            </button>
          ))}
        </div>
      ))}
    </main>
  );
}
