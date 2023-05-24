import { useState } from "react";
import Modal from "./Modal";
import Web3 from "web3";
import SwapComponent from "./SwapComponent";

interface Wallet {
  address: string;
  balance: string;
}

declare global {
  interface Window {
    ethereum?: any;
  }
}

function WalletModal() {
  const [wallet, setWallet] = useState<Wallet | null>(null);

  const connect = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        // Get the selected account
        const selectedAccount = accounts[0];

        const balance = await window.ethereum.request({
          method: "eth_getBalance",
          params: [selectedAccount, "latest"],
        });
        const web3 = new Web3(window.ethereum);
        const etherBalance = parseFloat(
          web3.utils.fromWei(balance, "ether")
        ).toFixed(4);

        // Format wallet address
        const formattedWallet = `${selectedAccount.slice(
          0,
          6
        )}...${selectedAccount.slice(-4)}`;
        setWallet({ address: formattedWallet, balance: etherBalance });

        // Listen for changes in the selected account
        window.ethereum.on("accountsChanged", (newAccounts: string[]) => {
          const newSelectedAccount = newAccounts[0];
          console.log("Selected account changed:", newSelectedAccount);
        });
      } else {
        console.error("MetaMask is not installed.");
      }
    } catch (error) {
      console.error("Error requesting accounts:", error);
    }
  };

  return (
    <Modal id="wallet-modal">
      <h1 className="text-center">
        {" "}
        Your Wallet <i className="ri-wallet-line ri-xl"></i>
      </h1>
      <div className="flex justify-center items-center h-full">
        {wallet ? (
          <div>
            <p className="text-slate-500">Address: </p>
            <p className="text-lg"> {wallet.address}</p>
            {/* <p className="text-slate-500">Balance</p>x
            <p className="text-lg">{wallet.balance} ETH</p> */}
            <SwapComponent balance={wallet.balance} />
          </div>
        ) : (
          <div>
            <button
              className="bg-slate-300 p-2 rounded-lg pointer"
              onClick={connect}
            >
              Connect
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
}

export default WalletModal;
