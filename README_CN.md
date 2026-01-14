# Kinetix Protocol

<div align="center">

**Mantle 收益型预测市场协议**

*在预测的同时赚取 DeFi 收益，最大化资本效率*

[![Mantle Sepolia](https://img.shields.io/badge/网络-Mantle%20Sepolia-10B981)](https://mantle.xyz)
[![Pyth Oracle](https://img.shields.io/badge/预言机-Pyth%20Network-6366F1)](https://pyth.network)
[![Gemini AI](https://img.shields.io/badge/AI-Gemini%202.0-4285F4)](https://ai.google.dev)

[English Version](./README.md)

</div>

---

## 📖 项目简介

Kinetix Protocol 是基于 **Mantle 网络** 构建的去中心化预测市场。与传统预测市场中资金闲置不同，Kinetix 会自动将投注资金路由到收益生成金库。

**核心创新**：赢家获得 `本金 + 奖金 + 累积收益`

---

## 🚀 快速开始

### 环境要求
- Node.js 18+
- MetaMask 钱包
- MNT 代币（从 [Mantle 水龙头](https://faucet.sepolia.mantle.xyz/) 获取）

### 安装与运行

```bash
# 1. 克隆项目
git clone https://github.com/your-org/kinetix-mantl.git
cd kinetix-mantl

# 2. 安装并运行前端
cd frontend
npm install
npm run dev
# 前端运行在 http://localhost:3009

# 3. (可选) 部署合约
cd ../contracts
npm install
cp .env.example .env
# 编辑 .env 填入您的私钥
npx hardhat run scripts/deploy.ts --network mantleSepolia
```

### 环境变量

```bash
# frontend/.env
VITE_GEMINI_API_KEY=您的_gemini_api_key  # 用于 AI 分析

# contracts/.env
DEPLOYER_PRIVATE_KEY=您的私钥
```

---

## 📜 已部署合约 (Mantle Sepolia)

| 合约 | 地址 |
|------|------|
| **KinetixMarket** | `0x08A1F2Fd7bD4c08d0968937BAe74F52b6bc63DBF` |
| **KinetixVault** | `0x98a5d20b874933bd6abbc7662e884567f77eee90` |
| **Pyth 预言机** | `0x98046Bd286715D3B0BC227Dd7a956b83D8978603` |

---

## ✨ 核心功能

| 功能 | 描述 |
|------|------|
| **收益型投注** | 质押期间自动产生收益 |
| **Pyth 预言机集成** | 基于链上价格的去中心化结算 |
| **AI 洞察** | Gemini 驱动的情绪、置信度与风险分析 |
| **多模式结算** | 手动 / Pyth 预言机 / AI 辅助结算 |

---

## 🏗️ 项目结构

```
kinetix-mantl/
├── frontend/              # React + Vite 前端
│   ├── src/
│   │   ├── components/    # UI 组件
│   │   ├── hooks/         # 区块链钩子
│   │   ├── services/      # AI 与数据服务
│   │   └── contracts/     # ABI 与地址
│   └── package.json
├── contracts/             # Solidity 智能合约
│   ├── contracts/
│   │   ├── KinetixMarket.sol
│   │   └── KinetixVault.sol
│   ├── scripts/deploy.ts
│   └── hardhat.config.cts
└── README.md
```

---

## 🛠️ 技术栈

- **前端**: React 19, TypeScript, Vite, wagmi v2, viem, TailwindCSS
- **合约**: Solidity 0.8.27, Hardhat, OpenZeppelin, Pyth SDK
- **AI**: Gemini 2.0 Flash
- **网络**: Mantle Sepolia (Chain ID: 5003)

---

## 🎯 黑客松赛道匹配

| 赛道 | 匹配点 |
|------|--------|
| **AI & Oracles** | Gemini AI + Pyth 预言机集成 |
| **DeFi & Composability** | 收益型预测市场 |

---

## 🔗 相关链接

- [Mantle 网络](https://mantle.xyz)
- [Mantle Sepolia 浏览器](https://explorer.sepolia.mantle.xyz)
- [Pyth Network](https://pyth.network)

---

<div align="center">

**为 Mantle 全球黑客松 2025 构建** 🚀

</div>
