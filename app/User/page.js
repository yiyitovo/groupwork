"use client";
import ConnectWallet from "../components/ConnectWallet";

export default function UserPage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Your Vaults</h2>
      <ConnectWallet />
      {/* 可拓展：展示当前连接用户的 vault 数据 */}
    </div>
  );
}