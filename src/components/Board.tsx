import { useEffect, useState } from "react";
import { pokemonList } from "../data";
import Card from "./Card";

interface BoardProps {
  difficulty: "easy" | "normal" | "hard";
  setGameCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Board({
  difficulty,
  setGameCompleted,
  setShowModal,
}: BoardProps) {
  const [cards, setCards] = useState<string[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matchedIndices, setMatchedIndices] = useState<number[]>([]);

  useEffect(() => {
    generateCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty]);

  useEffect(() => {
    if (
      cards.length !== 0 &&
      matchedIndices.length !== 0 &&
      matchedIndices.length === cards.length
    ) {
      setGameCompleted(true);
      setShowModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchedIndices, cards.length, setGameCompleted, setShowModal]);

  function getPokemonName(value: string) {
    const segments = value.split("/");
    const name = segments[segments.length - 1].split(".")[0];

    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  const shuffle = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const hasAdjacentPairs = (cards: string[]): boolean => {
    for (let i = 0; i < cards.length - 1; i++) {
      if (cards[i] === cards[i + 1]) {
        return true;
      }
    }
    return false;
  };

  const generateCards = () => {
    const numberOfPairs = getNumberOfPairs();
    const shuffledPokemonList = shuffle(pokemonList).slice(0, numberOfPairs);
    const doubledCards = [...shuffledPokemonList, ...shuffledPokemonList];

    let shuffledCards;
    do {
      shuffledCards = shuffle(doubledCards);
    } while (hasAdjacentPairs(shuffledCards));

    setCards(shuffledCards);
    setFlippedIndices([]);
    setMatchedIndices([]);
    setGameCompleted(false);
  };

  const handleCardClick = (index: number) => {
    if (
      flippedIndices.length < 2 &&
      !flippedIndices.includes(index) &&
      !matchedIndices.includes(index)
    ) {
      const newFlippedIndices = [...flippedIndices, index];
      setFlippedIndices(newFlippedIndices);

      if (newFlippedIndices.length === 2) {
        setTimeout(() => compareCards(newFlippedIndices), 500);
      }
    }
  };

  const compareCards = (indices: number[]) => {
    const [firstIndex, secondIndex] = indices;
    if (cards[firstIndex] === cards[secondIndex]) {
      setMatchedIndices([...matchedIndices, firstIndex, secondIndex]);
    }
    setTimeout(() => {
      setFlippedIndices([]);
    }, 500);
  };

  const getNumberOfPairs = () => {
    switch (difficulty) {
      case "easy":
        return 8;
      case "normal":
        return 18;
      case "hard":
        return 32;
      default:
        return 8;
    }
  };

  const getGridColumns = () => {
    switch (difficulty) {
      case "easy":
        return "grid-cols-4";
      case "normal":
        return "grid-cols-6";
      case "hard":
        return "grid-cols-8";
      default:
        return "grid-cols-4";
    }
  };

  return (
    <>
      <div className={`grid gap-4 ${getGridColumns()}`}>
        {cards.map((card, index) => (
          <Card
            key={index}
            name={getPokemonName(card)}
            image={card}
            flipped={
              flippedIndices.includes(index) || matchedIndices.includes(index)
            }
            matched={matchedIndices.includes(index)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </>
  );
}
