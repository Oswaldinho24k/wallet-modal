import { useModal } from "../hooks/useModal";

interface ModalProps {
  modal: React.ReactNode | any;
  buttonText: string;
  id: string;
}

function ModalTrigger({ modal, buttonText = "Open", id }: ModalProps) {
  const { handleOpen } = useModal();
  return (
    <>
      <div className="p-10">
        <button
          className="bg-slate-300 p-3 rounded-lg pointer text-xl"
          onClick={() => handleOpen(id)}
        >
          {buttonText}
        </button>
      </div>
      {modal}
    </>
  );
}

export default ModalTrigger;
