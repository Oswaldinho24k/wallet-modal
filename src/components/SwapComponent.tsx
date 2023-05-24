import { useState } from "react";
interface SwapProps {
  balance: string;
}
function SwapComponent({ balance }: SwapProps) {
  const [number, setNumber] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNumber(Number(e.target.value));
  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNumber2(Number(e.target.value));
  return (
    <div className="w-full bg-slate-900 text-white rounded-lg p-5 relative">
      <p className="mb-2">Swap</p>
      <button className="absolute top-[calc(50%-30px)] right-[calc(50%-10px)] bg-slate-900 p-1 rounded-lg pointer h-10 w-10">
        <i className="ri-arrow-down-line ri-lg"></i>
      </button>
      <div className="flex justify-between gap-5 sm:gap-10 rounded-lg bg-slate-500 mb-2 p-5">
        <div className="w-1/2 sm:w-1/3">
          <input
            value={number}
            className="bg-slate-300 text-2xl w-full mb-2 rounded-lg text-black p-1"
            type="number"
            onChange={handleChange}
          />
          <p>$ {number}</p>
        </div>
        <div className="w-1/2 sm:w-1/3">
          <select
            className="bg-slate-300 text-2xl w-full mb-2 rounded-lg text-black p-1"
            defaultValue="eth"
          >
            <option value="eth">ETH</option>
            <option value="btc">BTC</option>
            <option value="usdt">USDT</option>
          </select>
          <p>Balance: {balance}</p>
        </div>
      </div>
      <div className="flex justify-between gap-5 sm:gap-10 rounded-lg bg-slate-500 mb-2 p-5">
        <div className="w-1/2 sm:w-1/3">
          <input
            value={number2}
            className="bg-slate-300 text-2xl w-full mb-2 rounded-lg text-black p-1"
            type="number"
            onChange={handleChange2}
          />
          <p>$ {number2}</p>
        </div>
        <div className="w-1/2 sm:w-1/3">
          <select
            className="bg-slate-300 text-2xl w-full mb-2 rounded-lg text-black p-1"
            defaultValue="usdt"
          >
            <option value="eth">ETH</option>
            <option value="btc">BTC</option>
            <option value="usdt">USDT</option>
          </select>
          <p>Balance: 0</p>
        </div>
      </div>
      <button className="bg-slate-300 p-2 rounded-lg pointer w-full text-black">
        Swap
      </button>
    </div>
  );
}

export default SwapComponent;
