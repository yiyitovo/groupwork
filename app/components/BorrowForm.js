"use client";
import { useState } from "react";
import { borrowDAI } from "../lib/contract";

export default function BorrowForm() {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState(null);

  const handleBorrow = async () => {
    setLoading(true);
    try {
      const tx = await borrowDAI(amount);
      setTxHash(tx.hash);
    } catch (error) {
      console.error("Borrow failed:", error);
    }
    setLoading(false);
  };

  return (
    <div className="p-4 border rounded-md shadow-md w-full max-w-md mt-6">
      <h2 className="text-lg font-bold mb-2">Borrow DAI</h2>
      <input
        type="number"
        placeholder="Enter DAI amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={handleBorrow}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        disabled={loading}
      >
        {loading ? "Processing..." : "Borrow"}
      </button>
      {txHash && (
        <p className="text-sm mt-2">
          Tx:{" "}
          <a
            href={`https://sepolia.etherscan.io/tx/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-500"
          >
            {txHash}
          </a>
        </p>
      )}
    </div>
  );
}