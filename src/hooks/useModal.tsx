import { createContext, useContext, useEffect, useState } from "react";

function useModalState(): {
  modals: { [key: string]: boolean };
  handleOpen: (id: string) => void;
} {
  const [modals, setIsOpen] = useState<{ [key: string]: boolean }>({});

  const handleOpen = (id: string) => {
    setIsOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return { modals, handleOpen };
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
