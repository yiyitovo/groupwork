"use client";
import { useState, useEffect } from "react";
import DepositForm from "./components/DepositForm";
import WithdrawForm from "./components/WithdrawForm";
import BorrowForm from "./components/BorrowForm";
import RepayForm from "./components/RepayForm";
import LiquidationPanel from "./components/LiquidationPanel";
import InterestDisplay from "./components/InterestDisplay";

export default function Home() {
  const [daiPrice, setDaiPrice] = useState<number | null>(null);

  useEffect(() => {
    async function fetchPrice() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=dai&vs_currencies=usd"
        );
        const data = await res.json();
        setDaiPrice(data.dai.usd);
      } catch (error) {
        console.error("Failed to fetch DAI price:", error);
      }
    }
    fetchPrice();
  }, []);

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-white font-sans px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* 顶部卡片 */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-[#1c1c20] p-6 rounded-xl shadow-md">
          <div>
            <h1 className="text-2xl font-bold">MakerDAO Vault System</h1>
            <p className="text-sm text-gray-400">DeFi lending made trustless</p>
          </div>
          <div className="mt-4 sm:mt-0 text-right">
            <p className="text-sm text-gray-400">Current DAI Price</p>
            <p className="text-xl font-semibold text-green-400">
              ${daiPrice ? daiPrice.toFixed(2) : "Loading..."}
            </p>
          </div>
        </div>

        {/* 快捷功能卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#1c1c20] p-6 rounded-xl border border-[#2d2d33] hover:border-blue-500 transition"
            >
              <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
              <p className="text-sm text-gray-400">{feature.desc}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                {feature.button}
              </button>
            </div>
          ))}
        </div>
                {/* 功能表单区块 ✅ 实际可用功能：存款 / 提取 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <DepositForm />
          <WithdrawForm />
        </div>
        {/* 借贷 / 还款功能表单 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <BorrowForm />
          <RepayForm />
        </div>
        {/* 利率信息和清算面板 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <InterestDisplay />
          <LiquidationPanel />
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Create Vault",
    desc: "Open a vault by locking ETH and minting DAI.",
    button: "Start Now",
  },
  {
    title: "Deposit Collateral",
    desc: "Secure your loan by depositing more ETH or assets.",
    button: "Deposit",
  },
  {
    title: "Borrow / Repay DAI",
    desc: "Borrow DAI or repay your debt anytime with no fees.",
    button: "Manage",
  },
];