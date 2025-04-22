"use client";
import { useState } from "react";
import { repayDAI } from "../lib/contract";

export default function RepayForm() {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState(null);

  const handleRepay = async () => {
    setLoading(true);
    try {
      const tx = await repayDAI(amount);
      setTxHash(tx.hash);
    } catch (error) {
      console.error("Repayment failed:", error);
    }
    setLoading(false);
  };

  return (
    <div className="p-4 border rounded-md shadow-md w-full max-w-md mt-6">
      <h2 className="text-lg font-bold mb-2">Repay DAI</h2>
      <input
        type="number"
        placeholder="Enter DAI amount to repay"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={handleRepay}
        className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        disabled={loading}
      >
        {loading ? "Processing..." : "Repay"}
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