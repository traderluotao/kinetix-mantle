import { createConfig, http } from 'wagmi';
import { injected, metaMask } from 'wagmi/connectors';
import { mantleSepolia } from './chains';

/**
 * Wagmi Configuration for Kinetix Protocol
 * - Supports Mantle Sepolia Testnet
 * - Uses MetaMask and generic injected connectors
 */
export const wagmiConfig = createConfig({
  chains: [mantleSepolia],
  connectors: [
    metaMask({
      dappMetadata: {
        name: 'Kinetix Protocol',
        url: typeof window !== 'undefined' ? window.location.origin : '',
      },
    }),
    injected(), // Fallback for other wallets
  ],
  transports: {
    [mantleSepolia.id]: http('https://rpc.sepolia.mantle.xyz'),
  },
});

// Re-export for convenience
export { mantleSepolia };
