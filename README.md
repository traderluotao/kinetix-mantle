# Kinetix Protocol

<div align="center">

**The First Yield-Bearing Prediction Layer on Mantle**

*Maximize capital efficiency by earning DeFi yields while predicting outcomes*

[![Mantle Sepolia](https://img.shields.io/badge/Network-Mantle%20Sepolia-10B981)](https://mantle.xyz)
[![Pyth Oracle](https://img.shields.io/badge/Oracle-Pyth%20Network-6366F1)](https://pyth.network)
[![Gemini AI](https://img.shields.io/badge/AI-Gemini%202.0-4285F4)](https://ai.google.dev)

[中文版本](./README_CN.md)

</div>

---

## 📖 Overview

Kinetix Protocol is a decentralized prediction market built on **Mantle Network**. Unlike traditional prediction markets where capital sits idle, Kinetix automatically routes betting funds into yield-generating vaults.

**Core Innovation**: Winners receive `Stake + Winnings + Accumulated Yield`

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MetaMask wallet
- MNT tokens from [Mantle Faucet](https://faucet.sepolia.mantle.xyz/)

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/your-org/kinetix-mantl.git
cd kinetix-mantl

# 2. Install & run frontend
cd frontend
npm install
npm run dev
# Frontend runs at http://localhost:3009

# 3. (Optional) Deploy contracts
cd ../contracts
npm install
cp .env.example .env
# Edit .env with your private key
npx hardhat run scripts/deploy.ts --network mantleSepolia
```

### Environment Variables

```bash
# frontend/.env
VITE_GEMINI_API_KEY=your_gemini_api_key  # For AI analysis

# contracts/.env
DEPLOYER_PRIVATE_KEY=your_private_key
```

---

## 📜 Deployed Contracts (Mantle Sepolia)

| Contract | Address |
|----------|---------|
| **KinetixMarket** | `0x08A1F2Fd7bD4c08d0968937BAe74F52b6bc63DBF` |
| **KinetixVault** | `0x98a5d20b874933bd6abbc7662e884567f77eee90` |
| **Pyth Oracle** | `0x98046Bd286715D3B0BC227Dd7a956b83D8978603` |

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| **Yield-Bearing Bets** | Stakes earn yield while locked in vault |
| **Pyth Oracle Integration** | Decentralized price resolution for crypto markets |
| **AI Insights** | Gemini-powered sentiment, confidence & risk analysis |
| **Multi-Mode Settlement** | Manual / Pyth Oracle / AI-assisted resolution |

---

## 🏗️ Project Structure

```
kinetix-mantl/
├── frontend/              # React + Vite frontend
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── hooks/         # Blockchain hooks
│   │   ├── services/      # AI & data services
│   │   └── contracts/     # ABIs & addresses
│   └── package.json
├── contracts/             # Solidity smart contracts
│   ├── contracts/
│   │   ├── KinetixMarket.sol
│   │   └── KinetixVault.sol
│   ├── scripts/deploy.ts
│   └── hardhat.config.cts
└── README.md
```

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite, wagmi v2, viem, TailwindCSS
- **Contracts**: Solidity 0.8.27, Hardhat, OpenZeppelin, Pyth SDK
- **AI**: Gemini 2.0 Flash
- **Network**: Mantle Sepolia (Chain ID: 5003)

---

## 🎯 Hackathon Tracks

| Track | How We Fit |
|-------|-----------|
| **AI & Oracles** | Gemini AI + Pyth Network integration |
| **DeFi & Composability** | Yield-bearing prediction markets |

---

## 🔗 Links

- [Mantle Network](https://mantle.xyz)
- [Mantle Sepolia Explorer](https://explorer.sepolia.mantle.xyz)
- [Pyth Network](https://pyth.network)

---

<div align="center">

**Built for Mantle Global Hackathon 2025** 🚀

</div>
