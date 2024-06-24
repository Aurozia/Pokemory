import Pokeball from "./../assets/pokeballIcon.svg";
import Pokemon1 from "./../assets/pokemon/bulbizarre.png";

export const Card = () => {
  return (
    <div className="size-[120px] cursor-pointer group perspective">
      <div className="bg-hover rounded-sm w-full h-full relative preserve-3d group-hover:rotate-y-180 duration-1000">
        <div className="w-full h-full absolute backface-hidden flex justify-center items-center">
          <img
            src={Pokeball}
            alt="Pokeball"
            className="mx-auto size-[70px] pointer-events-none"
          />
        </div>
        <div className="w-full h-full absolute backface-hidden rotate-y-180 overflow-hidden">
          <div className="bg-white rounded-sm size-[120px] flex justify-center items-center">
            <img
              src={Pokemon1}
              alt="Pokeball"
              className="size-[100px] pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
