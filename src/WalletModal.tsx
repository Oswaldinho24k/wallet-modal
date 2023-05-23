import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Web3 from "web3";

interface Wallet {
  address: string;
  balance: number;
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
      // Check if MetaMask is installed and enabled
      if (typeof window.ethereum !== "undefined") {
        // Request access to the user's Ethereum accounts
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
        const etherBalance = parseFloat(web3.utils.fromWei(balance, "ether"));

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
    <Modal>
      <h1>Connect Your Wallet</h1>
      {wallet ? (
        <div>
          <p>Wallet Connected</p>
          <p>{wallet.address}</p>
          <p>{wallet.balance} ETH</p>
        </div>
      ) : (
        <button onClick={connect}>Connect</button>
      )}
    </Modal>
  );
}

export default WalletModal;
