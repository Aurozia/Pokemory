import { useState } from "react";
import Pokeball from "./../assets/pokeballIcon.svg";
import Pokemon6 from "./../assets/pokemon/aquali.png";
import Pokemon1 from "./../assets/pokemon/bulbizarre.png";
import Pokemon3 from "./../assets/pokemon/carapuce.png";
import Pokemon5 from "./../assets/pokemon/evoli.png";
import Pokemon4 from "./../assets/pokemon/pikachu.png";
import Pokemon8 from "./../assets/pokemon/pyroli.png";
import Pokemon2 from "./../assets/pokemon/salameche.png";
import Pokemon7 from "./../assets/pokemon/voltali.png";

interface Props {
  array: number[][];
  setArray: React.Dispatch<React.SetStateAction<number[][]>>;
}

export default function Board({ array, setArray }: Props) {
  const [ready, setReady] = useState(true);
  const [firstCardClicked, setFirstCardClicked] = useState<number[]>([]);
  const [nbCardsReturned, setNbCardsReturned] = useState(0);

  const result = [
    [1, 2, 7, 6],
    [4, 1, 3, 8],
    [3, 8, 6, 5],
    [5, 2, 4, 7],
  ];

  function getImage(value: number) {
    let imgTxt: string = "";

    switch (value) {
      case 1:
        imgTxt = Pokemon1;
        break;
      case 2:
        imgTxt = Pokemon2;
        break;
      case 3:
        imgTxt = Pokemon3;
        break;
      case 4:
        imgTxt = Pokemon4;
        break;
      case 5:
        imgTxt = Pokemon5;
        break;
      case 6:
        imgTxt = Pokemon6;
        break;
      case 7:
        imgTxt = Pokemon7;
        break;
      case 8:
        imgTxt = Pokemon8;
        break;
      default:
        console.log("Le pokémon sauvage s'est enfuit");
        break;
    }

    return imgTxt;
  }

  function getPokemonName(value: string) {
    const segments = value.split("/");
    const name = segments[segments.length - 1].split(".")[0];

    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  function check(row: number, col: number) {
    if (ready) {
      setNbCardsReturned((prevNbCardsReturned) => prevNbCardsReturned + 1);

      setArray((prevArray) => {
        const newArray = [...prevArray];
        newArray[row][col] = result[row][col];

        if (nbCardsReturned === 1) {
          setReady(false);
          if (
            newArray[row][col] !==
            result[firstCardClicked[0]][firstCardClicked[1]]
          ) {
            setTimeout(() => {
              newArray[row][col] = 0;
              newArray[firstCardClicked[0]][firstCardClicked[1]] = 0;
              setReady(true);
            }, 750);
          } else {
            setReady(true);
            // setTimeout(() => {
            //   setReady(true);
            // }, 1000);
          }
          setNbCardsReturned(0);
        }

        setFirstCardClicked([row, col]);
        return newArray;
      });
    }
  }

  return (
    <main>
      {array.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex justify-center items-center gap-4 py-2"
        >
          {row.map((_, colIndex) =>
            array[rowIndex][colIndex] === 0 ? (
              <button
                key={`${rowIndex}-${colIndex}`}
                className="bg-red-400 rounded-sm size-[150px]"
                onClick={() => check(rowIndex, colIndex)}
              >
                <img
                  src={Pokeball}
                  alt="Pokeball"
                  className="mx-auto size-[100px] pointer-events-none"
                />
              </button>
            ) : (
              <img
                key={`${rowIndex}-${colIndex}`}
                src={getImage(array[rowIndex][colIndex])}
                alt={`Pokemon ${getPokemonName(
                  getImage(array[rowIndex][colIndex])
                )}`}
                className="bg-white rounded-sm size-[150px] pointer-events-none"
              />
            )
          )}
        </div>
      ))}
    </main>
  );
}
