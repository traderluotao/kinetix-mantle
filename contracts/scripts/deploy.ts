import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with account:", deployer.address);
  console.log("Account balance:", (await ethers.provider.getBalance(deployer.address)).toString());

  // 1. Deploy Vault
  console.log("\n1. Deploying KinetixVault...");
  const Vault = await ethers.getContractFactory("KinetixVault");
  const vault = await Vault.deploy(deployer.address);
  await vault.waitForDeployment();
  const vaultAddress = await vault.getAddress();
  console.log("KinetixVault deployed to:", vaultAddress);

  // 2. Deploy Market
  console.log("\n2. Deploying KinetixMarket...");
  const Market = await ethers.getContractFactory("KinetixMarket");
  const market = await Market.deploy(deployer.address);
  await market.waitForDeployment();
  const marketAddress = await market.getAddress();
  console.log("KinetixMarket deployed to:", marketAddress);

  // 3. Configure contracts
  console.log("\n3. Configuring contracts...");

  const PYTH_MANTLE_SEPOLIA = "0x98046Bd286715D3B0BC227Dd7a956b83D8978603";
  await market.setPyth(PYTH_MANTLE_SEPOLIA);
  console.log("Pyth contract set to:", PYTH_MANTLE_SEPOLIA);

  // Set vault in market
  await market.setVault(vaultAddress);
  console.log("Market vault set to:", vaultAddress);

  // Set market in vault
  await vault.setMarketContract(marketAddress);
  console.log("Vault market contract set to:", marketAddress);

  // 4. Create initial markets
  console.log("\n4. Creating initial markets...");

  const markets = [
    {
      id: ethers.id("m1"),
      question: "Will Bitcoin break $100k by Q4 2025?",
      description: "Prediction market based on the price of BTC/USD on major exchanges.",
      endTime: Math.floor(Date.now() / 1000) + 365 * 24 * 60 * 60, // 1 year
      settlementType: 1, // Pyth
      priceFeedId: "0xe62df6c8b4a27ef18332912472d96a1f39c4a0a45f9a20c7e3da06d396cc14d2",
      targetPrice: ethers.parseUnits("100000", 8), // Pyth uses 8 decimals for most prices
    },
    {
      id: ethers.id("m2"),
      question: "Will Mantle Mainnet reach $5B TVL before June 2025?",
      description: "Based on official data from DefiLlama and Mantle documentation.",
      endTime: Math.floor(Date.now() / 1000) + 180 * 24 * 60 * 60, // 6 months
      settlementType: 0, // Manual
      priceFeedId: ethers.ZeroHash,
      targetPrice: 0,
    },
    {
      id: ethers.id("m3"),
      question: "Will the Fed cut interest rates in the next FOMC meeting?",
      description: "Binary outcome based on the official Federal Reserve statement.",
      endTime: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60, // 1 month
      settlementType: 2, // AI
      priceFeedId: ethers.ZeroHash,
      targetPrice: 0,
    },
  ];

  for (const m of markets) {
    await market.createMarket(
      m.id,
      m.question,
      m.description,
      m.endTime,
      deployer.address, // Oracle
      m.settlementType,
      m.priceFeedId,
      m.targetPrice
    );
    console.log(`Created market: ${m.question.substring(0, 30)}...`);
  }

  // 5. Output summary
  console.log("\n========================================");
  console.log("DEPLOYMENT COMPLETE");
  console.log("========================================");
  console.log("\nContract Addresses:");
  console.log(`  KinetixMarket: ${marketAddress}`);
  console.log(`  KinetixVault:  ${vaultAddress}`);
  console.log("\nMarket IDs:");
  markets.forEach((m, i) => {
    console.log(`  m${i + 1}: ${m.id}`);
  });
  console.log("\n========================================");
  console.log("\nUpdate these addresses in:");
  console.log("  contracts/addresses.ts");
  console.log("========================================");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
