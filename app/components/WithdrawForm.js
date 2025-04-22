"use client";

import { useState } from "react";

export default function WithdrawForm() {
  const [amount, setAmount] = useState("");
  const [userAddress, setUserAddress] = useState("");

  const handleWithdraw = async () => {
    if (!amount || !userAddress) {
      alert("Please enter an address and amount.");
      return;
    }

    try {
      const response = await fetch("/api/withdraw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userAddress, amount }),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Withdraw successful!");
      } else {
        alert("Withdraw failed: " + result.error);
      }
    } catch (error) {
      console.error("Withdraw error:", error);
      alert("Withdraw failed.");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 mb-6 w-full max-w-md">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">Withdraw ETH</h2>
      <input
        type="text"
        placeholder="Your wallet address"
        value={userAddress}
        onChange={(e) => setUserAddress(e.target.value)}
        className="w-full p-2 mb-3 rounded border dark:bg-gray-800 dark:text-white"
      />
      <input
        type="number"
        placeholder="Amount to withdraw"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 mb-3 rounded border dark:bg-gray-800 dark:text-white"
      />
      <button
        onClick={handleWithdraw}
        className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
      >
        Withdraw
      </button>
    </div>
  );
}