import { FC } from "react";

interface HubProps {
  name: string;
  hubName: string;
  isPrivate: boolean;
  onPlay: () => void;
}

const Hub: FC<HubProps> = ({ name, hubName, isPrivate, onPlay }) => {
  return (
    <div className="flex  items-center border border-gray-300 rounded-lg   bg-[#FFE6BD] me-2 ">
      <p className="ps-2 py-1 border-r bg-[#FFE6BD] border-gray-300  w-28 text-nowrap">
        {name}
      </p>
      <h2 className="px-2 py-1 border-r bg-[#FFE6BD] border-gray-300 overflow-hidden text-nowrap w-56">
        {hubName}
      </h2>
      <p className="px-2 py-1 border-r bg-[#FFE6BD] border-gray-300 text-center w-20">
        {isPrivate ? "Private" : "Public"}
      </p>
      <button
        className="ps-1 py-1 text-blue-500 hover:underline w-9"
        onClick={onPlay}
      >
        Play
      </button>
    </div>
  );
};

export default Hub;
