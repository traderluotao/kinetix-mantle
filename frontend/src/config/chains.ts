import { defineChain } from 'viem';

/**
 * Mantle Sepolia Testnet Chain Configuration
 * Chain ID: 5003
 * RPC: https://rpc.sepolia.mantle.xyz
 * Explorer: https://sepolia.mantlescan.xyz
 */
export const mantleSepolia = defineChain({
  id: 5003,
  name: 'Mantle Sepolia',
  nativeCurrency: {
    name: 'Mantle Test Token',
    symbol: 'MNT',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.sepolia.mantle.xyz'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Mantle Explorer',
      url: 'https://sepolia.mantlescan.xyz',
    },
  },
  testnet: true,
});

// MNT Token address (placeholder for any specialized tokens)
export const MNT_TOKEN_ADDRESS = '0x0000000000000000000000000000000000000000' as const;

// Chain ID constant for validation
export const MANTLE_CHAIN_ID = 5003;
