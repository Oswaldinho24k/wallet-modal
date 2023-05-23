import { useModal } from "../hooks/useModal";

interface ModalProps {
  modal: React.ReactNode;
  buttonText: string;
}

function ModalTrigger({ modal, buttonText = "Open" }: ModalProps) {
  const { handleOpen } = useModal();
  return (
    <>
      <div className="p-10">
        <button
          className="bg-white p-2 rounded-lg pointer text-2xl"
          onClick={handleOpen}
        >
          {buttonText}
        </button>
      </div>
      {modal}
    </>
  );
}

export default ModalTrigger;
