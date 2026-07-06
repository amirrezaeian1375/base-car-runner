// Farcaster Address Tagging Configuration
// This file helps connect user identities between their wallet and Farcaster account.

const ADDRESS_TAG_CONFIG = {
  appName: "Base Car",
  appUrl: "https://base-car-runner.vercel.app",
  iconUrl: "https://i.postimg.cc/bNLccGBw/1-1.jpg",
  description: "High-speed on-chain racing game on Base Network"
};

// Export for use in other modules
if (typeof module !== 'undefined') {
  module.exports = ADDRESS_TAG_CONFIG;
}
