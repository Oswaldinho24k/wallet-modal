import { createContext, useContext, useEffect, useState } from "react";

function useModalState(): {
  isOpen: boolean;
  handleOpen: () => void;
} {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen((prev: boolean) => !prev);
  };

  return { isOpen, handleOpen };
}

const ModalContext = createContext<ReturnType<typeof useModalState>>(
  {} as unknown as ReturnType<typeof useModalState>
);

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  return (
    <ModalContext.Provider value={useModalState()}>
      {children}
    </ModalContext.Provider>
  );
}
