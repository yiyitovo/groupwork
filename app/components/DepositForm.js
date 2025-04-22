// app/components/DepositForm.js
"use client";
import { useState } from "react";
import { ethers } from "ethers";
import { depositETH } from "../lib/contract";

export default function DepositForm() {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState(null);

  const handleDeposit = async () => {
    setLoading(true);
    try {
      const tx = await depositETH(amount);
      setTxHash(tx.hash);
    } catch (error) {
      console.error("Deposit failed:", error);
    }
    setLoading(false);
  };

  return (
    <div className="p-4 border rounded-md shadow-md w-full max-w-md">
      <h2 className="text-lg font-bold mb-2">Deposit ETH to Vault</h2>
      <input
        type="number"
        placeholder="Enter ETH amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={handleDeposit}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Processing..." : "Deposit"}
      </button>
      {txHash && (
        <p className="text-sm mt-2">
          Tx: <a href={`https://sepolia.etherscan.io/tx/${txHash}`} target="_blank" rel="noopener noreferrer" className="underline text-blue-500">{txHash}</a>
        </p>
      )}
    </div>
  );
}
