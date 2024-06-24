import Pokeball from "./../assets/pokeballIcon.svg";

interface CardProps {
  name: string;
  image: string;
  flipped: boolean;
  matched: boolean;
  onClick: () => void;
}

export default function Card({
  name,
  image,
  flipped,
  matched,
  onClick,
}: CardProps) {
  return (
    <div
      className={`size-[130px] cursor-pointer group perspective transform transition-transform duration-1000 ${
        matched ? "animate-scale" : ""
      }`}
      onClick={onClick}
    >
      <div
        className={`bg-hover rounded-sm w-full h-full relative preserve-3d ${
          flipped ? "rotate-y-180" : ""
        } duration-1000`}
      >
        <div className="w-full h-full absolute backface-hidden flex justify-center items-center">
          <img
            src={Pokeball}
            alt="Pokeball"
            className="mx-auto size-[80px] pointer-events-none"
          />
        </div>
        <div className="w-full h-full absolute backface-hidden rotate-y-180 overflow-hidden">
          <div className="bg-white rounded-sm size-[130px] flex justify-center items-center">
            <img
              src={image}
              alt={`Pokemon ${name}`}
              className="size-[110px] pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
