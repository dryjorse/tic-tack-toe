import { FC, ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#FFF3D9] rounded-lg  w-full max-w-lg mx-4 shadow-lg relative "
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="flex gap-2 absolute">
          <img
            src="/arrowLeft.svg"
            className="w-3 h-6 ms-3 mt-3"
            alt="back icon"
          />{" "}
          <span className="mt-3">Back</span>
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
