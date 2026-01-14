/**
 * Deployed Contract Addresses on Mantle Sepolia Testnet
 * 
 * Network: Mantle Sepolia Testnet (chainId: 5003)
 */

import { type Address } from 'viem';

// Mantle Sepolia Testnet Contract Addresses (Deployed 2026-01-08)
export const CONTRACT_ADDRESSES = {
  // Main Market Contract - handles betting and resolution
  MARKET: '0x08A1F2Fd7bD4c08d0968937BAe74F52b6bc63DBF' as Address,

  // Vault Contract - handles yield generation
  VAULT: '0x98a5d20b874933bd6abbc7662e884567f77eee90' as Address,

  // MNT Token Address (Static MNT wrap if needed)
  MNT_TOKEN: '0xdeadbeefdeadbeefdeadbeefdeadbeefdead0000' as Address,
} as const;

// Market IDs (bytes32 hashes)
// These correspond to the markets in constants.ts
export const MARKET_IDS = {
  m1: '0x83267a439473d40c510063b30f7c06d1e3bf496ea5e34c5e3290dfc7dc527ce1' as `0x${string}`,
  m2: '0x4c7b5cd57855cee824dfb36438b88ecb25d2d1493a0c53b69912ec4957d84d68' as `0x${string}`,
  m3: '0x7ad03d14656a059c9413d59d5609716f0def9014d30d8d88904e8f9eed6b99d8' as `0x${string}`,
} as const;

// Helper to get market ID from string ID
export function getMarketIdBytes(marketId: string): `0x${string}` {
  return MARKET_IDS[marketId as keyof typeof MARKET_IDS] ||
    ('0x' + marketId.padStart(64, '0')) as `0x${string}`;
}
