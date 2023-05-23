import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useModal } from "../hooks/useModal";

interface ModalProps {
  children: React.ReactNode;
}

function Modal({ children }: ModalProps) {
  const { isOpen, handleOpen } = useModal();

  return (
    <div>
      <div
        className={`w-full h-screen flex justify-center items-center fixed top-0 left-0 backdrop-blur-sm bg-white/30 p-5 sm:p-10 transition duration-500 ${
          isOpen ? "translate-y-0" : "translate-y-full "
        }`}
      >
        <div className="w-full sm:w-1/2 min-h-min h-1/2 bg-white rounded-lg p-5 sm:p-10 relative">
          <div className="absolute top-2 right-2">
            <button className="pointer p-2" onClick={handleOpen}>
              <i className="ri-close-line ri-xl"></i>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
