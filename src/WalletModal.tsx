import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Web3 from "web3";

interface ModalProps {}

function WalletModal({}: ModalProps) {
  const [wallet, setWallet] = useState<any>(null);

  const connect = () => {
    // Check if MetaMask is installed and enabled
    if (typeof window.ethereum !== "undefined") {
      // Request access to the user's Ethereum accounts
      const requestAccounts = async () => {
        try {
          // Request access to the user's accounts
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });

          // Get the selected account
          const selectedAccount = accounts[0];
          // const chainId = await window.ethereum.request({
          //   method: "eth_chainId",
          // });
          // const polygonChainId = "0x89"; // Polygon Mainnet Chain ID
          // if (chainId !== polygonChainId) {
          //   console.error("Please connect to the Polygon network.");
          //   return;
          // }

          const balance = await window.ethereum.request({
            method: "eth_getBalance",
            params: [selectedAccount, "latest"],
          });
          const web3 = new Web3(window.ethereum);
          const etherBalance = parseFloat(web3.utils.fromWei(balance, "ether"));

          // format wallet address
          const formattedWallet = `${selectedAccount.slice(
            0,
            6
          )}...${selectedAccount.slice(-4)}`;
          setWallet({ address: formattedWallet, balance: etherBalance });

          // Listen for changes in the selected account
          window.ethereum.on("accountsChanged", (newAccounts: any) => {
            const newSelectedAccount = newAccounts[0];
            console.log("Selected account changed:", newSelectedAccount);
          });
        } catch (error) {
          console.error("Error requesting accounts:", error);
        }
      };

      // Call the function to request accounts
      requestAccounts();
    } else {
      console.error("MetaMask is not installed.");
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
        <button onClick={connect}>connect</button>
      )}
    </Modal>
  );
}

export default WalletModal;
