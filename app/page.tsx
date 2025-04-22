"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* 用户信息卡片 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">👤 User-39595</h2>
          <p className="text-sm text-gray-400">UID: 665039595 | Wallet: 0x6650...c173</p>
          <p className="text-right text-sm mt-2">VIP Level: <span className="text-yellow-400">Regular User</span></p>
        </div>

        {/* 估算余额 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-md text-gray-300">Estimated Balance</h3>
          <p className="text-3xl font-bold text-yellow-400">0.00 FTGP</p>
          <p className="text-sm text-gray-500">≈ $0.00</p>
        </div>

        {/* 快捷功能 */}
        <h2 className="text-lg font-semibold">🚀 Get Started</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card title="Trade" desc="Convert fiat to FTGP or redeem tokens." />
          <Card title="Deposit" desc="Earn interest by depositing tokens." />
          <Card title="Loan" desc="Borrow by collateralizing FTGP." />
        </div>
      </div>
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition-all">
      <h4 className="text-md font-semibold">{title}</h4>
      <p className="text-sm text-gray-400">{desc}</p>
      <button className="mt-4 bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-500">
        Enter
      </button>
    </div>
  );
}