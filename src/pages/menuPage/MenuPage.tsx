import { FC } from "react";
import Button from "../../components/Button";

const MenuPage: FC = () => {
  return (
    <>
      <div className="container flex justify-around sm:justify-between">
        <div className="inline-flex flex-col gap-y-4 items-start">
          <img src="/bot.svg" alt="robot" className="w-14 sm:w-20 md:w-28 " />
          <h3 className="text-lg sm:text-[20px] lg:text-2xl max-w-32 md:max-w-36 lg:max-w-44 text-left">Play against bot</h3>
          <Button className="lg:text-xl max-w-36">Play vs bot</Button>
        </div>
        <div className="sm:flex items-center flex-col hidden sm:gap-y-9 md:gap-y-14">
          <h1
            className="text-4xl lg:text-[64px] inline-block"
            style={{ textShadow: "3px 5px 4px rgba(0, 0, 0, 0.25)" }}
          >
            Tic-<span className="text-[#FF6969]">Tac</span>-Toe
          </h1>
          <img src="/game-main.svg" alt="robot" className="sm:w-60 md:w-80 lg:w-96"/>
        </div>
        <div className="inline-flex flex-col gap-y-2 lg:gap-y-4 items-end">
          <img src="/user.svg" alt="human" className="w-14 sm:w-20 md:w-28 " />
          <h3 className="text-lg sm:text-[20px] lg:text-2xl max-w-32 md:max-w-36 lg:max-w-44 text-right">Play against human</h3>
          <Button className="lg:text-xl max-w-36">Play online</Button>
          <Button className="lg:text-xl max-w-36">Play ofline</Button>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
