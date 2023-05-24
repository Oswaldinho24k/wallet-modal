import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import ModalTrigger from "./components/ModalTrigger";
import WalletModal from "./components/WalletModal";

function App() {
  return (
    <div className="h-screen w-full bg-norepeat bg-cover bg-center bg-slate-900 p-10">
      <h1 className="text-3xl text-center text-white">0x Wallet Modal</h1>
      <div className="w-full h-full flex items-center justify-center flex-col sm:flex-row">
        <ModalTrigger
          id="wallet-modal"
          buttonText="Open Wallet Modal"
          modal={<WalletModal />}
        />
        <ModalTrigger
          id="another-one"
          buttonText="Another one"
          modal={<Modal id="another-one">Another One</Modal>}
        />
      </div>
    </div>
  );
}

export default App;
