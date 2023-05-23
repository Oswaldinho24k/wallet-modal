import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import ModalTrigger from "./components/ModalTrigger";
import WalletModal from "./WalletModal";

function App() {
  return (
    <div
      className="h-screen w-full bg-norepeat bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
      }}
    >
      <ModalTrigger buttonText="Open Modal" modal={<WalletModal />} />
    </div>
  );
}

export default App;
