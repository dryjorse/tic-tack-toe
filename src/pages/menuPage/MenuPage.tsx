import { FC, useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Hub from "../../components/Hub";
import Input from "../../components/Input";

const MenuPage: FC = () => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);

  const openFirstModal = () => setIsFirstModalOpen(true);
  const closeFirstModal = () => setIsFirstModalOpen(false);

  const openSecondModal = () => setIsSecondModalOpen(true);
  const closeSecondModal = () => setIsSecondModalOpen(false);

  const openThirdModal = () => setIsThirdModalOpen(true);
  const closeThirdModal = () => setIsThirdModalOpen(false);
  return (
    <>
      <div className="container flex justify-around sm:justify-between">
        <div className="inline-flex flex-col gap-y-4 items-start">
          <img src="/bot.svg" alt="robot" className="w-14 sm:w-20 md:w-28 " />
          <h3 className="text-lg sm:text-[20px] lg:text-2xl max-w-32 md:max-w-36 lg:max-w-44 text-left">
            Play against bot
          </h3>
          <Button className="lg:text-xl max-w-36">Play vs bot</Button>
        </div>
        <div className="sm:flex items-center flex-col hidden sm:gap-y-9 md:gap-y-14">
          <h1
            className="text-4xl lg:text-[64px] inline-block"
            style={{ textShadow: "3px 5px 4px rgba(0, 0, 0, 0.25)" }}
          >
            Tic-<span className="text-[#FF6969]">Tac</span>-Toe
          </h1>
          <img
            src="/game-main.svg"
            alt="robot"
            className="sm:w-60 md:w-80 lg:w-96"
          />
        </div>
        <div className="inline-flex flex-col gap-y-2 lg:gap-y-4 items-end">
          <img src="/user.svg" alt="human" className="w-14 sm:w-20 md:w-28 " />
          <h3 className="text-lg sm:text-[20px] lg:text-2xl max-w-32 md:max-w-36 lg:max-w-44 text-right">
            Play against human
          </h3>
          <Button className="lg:text-xl max-w-36" onClick={openFirstModal}>
            Play online
          </Button>
          <Button className="lg:text-xl max-w-36">Play ofline</Button>
        </div>
        <Modal isOpen={isFirstModalOpen} onClose={closeFirstModal}>
          <h2 className="text-xl font-semibold ms-auto me-auto w-20 mt-3">
            Hub list
          </h2>
          <div className="flex flex-col gap-y-4 mt-3 overflow-y-auto max-h-[40vh] ms-3 custom-scrollbar min-h-56">
            <Hub
              name="John Doe"
              hubName="Learning Hub"
              isPrivate={true}
              onPlay={openThirdModal}
            />
            <Hub
              name="John"
              hubName="Learning Hub without me omg"
              isPrivate={true}
              onPlay={openThirdModal}
            />
            <Hub
              name="Alice"
              hubName="Tech Talk"
              isPrivate={false}
              onPlay={openThirdModal}
            />
            <Hub
              name="Bob"
              hubName="Gaming Hub"
              isPrivate={true}
              onPlay={openThirdModal}
            />
            <Hub
              name="Charlie"
              hubName="Art Lovers"
              isPrivate={false}
              onPlay={openThirdModal}
            />
            <Hub
              name="David"
              hubName="Music Fans"
              isPrivate={true}
              onPlay={openThirdModal}
            />
            <Hub
              name="Eva"
              hubName="Movie Buffs"
              isPrivate={false}
              onPlay={openThirdModal}
            />
            <Hub
              name="Frank"
              hubName="Book Club"
              isPrivate={true}
              onPlay={openThirdModal}
            />
            <Hub
              name="Grace"
              hubName="Sports Fans"
              isPrivate={false}
              onPlay={openThirdModal}
            />
            <Hub
              name="Hannah"
              hubName="Travel Enthusiasts"
              isPrivate={true}
              onPlay={openThirdModal}
            />
            <Hub
              name="Ivy"
              hubName="Cooking Club"
              isPrivate={false}
              onPlay={openThirdModal}
            />
            <Hub
              name="Jack"
              hubName="Photography Lovers"
              isPrivate={true}
              onPlay={openThirdModal}
            />
            <Hub
              name="Kylie"
              hubName="Gardening Club"
              isPrivate={false}
              onPlay={openThirdModal}
            />
            <Hub
              name="Liam"
              hubName="Science Club"
              isPrivate={true}
              onPlay={openThirdModal}
            />
            <Hub
              name="Megan"
              hubName="Fitness Group"
              isPrivate={false}
              onPlay={openThirdModal}
            />
          </div>
          <Button onClick={openSecondModal} className="m-3">
            Create
          </Button>
          <Button className="m-3">Refresh</Button>
        </Modal>
        <Modal isOpen={isSecondModalOpen} onClose={closeSecondModal}>
          <div className="flex flex-col gap-y-4 mt-3 overflow-y-auto max-h-[40vh] ms-3 min-h-56">
            <h2 className="text-xl font-semibold ms-auto me-auto w-36 mt-3">
              Create Hub
            </h2>
            <div className="flex flex-col gap-y-3">
              <section className="flex flex-col ms-auto me-auto">
                {" "}
                <label htmlFor="hubName" className="text-lg">
                  Hub name
                </label>
                <Input
                  id="hubName"
                  placeholder="Hub name"
                  type="text"
                  className="bg-[#FFE6BD]"
                />
              </section>
              <section className="flex flex-col ms-auto me-auto">
                <label htmlFor="hubName" className="text-lg">
                  Hub password
                </label>
                <Input
                  id="hubPassword"
                  placeholder="Hub password"
                  type="password"
                  className="bg-[#FFE6BD]"
                />
              </section>
              <Button className="max-w-32 mb-3 mt-4 ms-auto me-auto bg-white">
                Create
              </Button>
            </div>
          </div>
        </Modal>
        <Modal isOpen={isThirdModalOpen} onClose={closeThirdModal}>
          <div className="flex flex-col gap-y-4 mt-3 overflow-y-auto max-h-[40vh] ms-3 min-h-56">
            <h2 className="text-xl font-semibold ms-auto me-auto w-36 mt-3">
              Sign in to hub
            </h2>
            <div className="flex flex-col gap-y-3">
              <section className="flex flex-col ms-auto me-auto items-center">
                <Input
                  id="signHubName"
                  type="text"
                  className="bg-[#FFE6BD]"
                  readonly={true}
                />
              </section>
              <section className="flex flex-col ms-auto me-auto items-center">
                <label htmlFor="hubName" className="text-lg">
                  Hub password
                </label>
                <Input
                  id="hubPassword"
                  placeholder="Hub password"
                  type="password"
                  className="bg-[#FFE6BD]"
                />
              </section>
              <Button className="max-w-32 mb-3 mt-4 ms-auto me-auto bg-white">
                Create
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default MenuPage;
