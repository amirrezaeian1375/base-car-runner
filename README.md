# base-car-runner
🚗 Base On-Chain Car Runner
A modern, high-contrast 3-lane arcade car game integrated with a Base Mainnet smart contract leaderboard.
Collect GAS items to score, dodge enemy cars, and submit your final on-game score to the blockchain.

🚀 Live Demo: (add your Vercel link here)

🛡️ Security & Architecture
This project follows a security-first approach (no asset handling):

No Token Approvals Required: The game only calls submitScore(score) on your deployed contract. It does not request token approvals, transfers, or token/NFT custody.
Pure Client-Side Gameplay: The game runs fully in the browser (Canvas + JS). No backend servers, no database, no tracking scripts.
Wallet Optional (Play Mode): You can play without connecting a wallet.
On Game Over, connecting is only needed to submit the score on-chain.
Note: The score is computed client-side and then submitted. The contract records what the client submits (so it’s on-chain leaderboard, not fully game-proof verified).

✨ Gameplay Features
3 Lanes Road (Left / Center / Right)
Start countdown: 1 → 2 → 3 → GO!
Player lives: 3 hearts
Colliding with an enemy car reduces lives by 1. When lives reach 0 → Game Over
GAS items: Every GAS pickup adds +100 score
Difficulty scaling: Enemy spawn speed increases as score grows
On-Chain Leaderboard UI: Reads getTopScores() directly from the contract and shows Top players
🎮 Controls
Desktop
Move: A / D
Also works: ArrowLeft / ArrowRight
Mobile / Touch
Tap left half → move left lane
Tap right half → move right lane
🏆 On-Chain Leaderboard
When the game ends:

If wallet is connected, you submit your final score using:
submitScore(score)
The contract updates the Top scores list and the UI fetches it via:
getTopScores()
🧾 Smart Contract Details
Network: Base Mainnet (Chain ID: 8453)
Contract Address: 0xcA6A81a6676cA9A976A867997D061C0a6F7f495f
ABI Used (Frontend)
JavaScript

[
  "function submitScore(uint256 _score) external",
  "function getTopScores() external view returns (tuple(address player, uint256 score, uint256 timestamp)[])"
]
🛠️ Local Development
This project is a single-file frontend (no Node.js dependencies):

Download or clone the repo
Open index.html in any modern browser
📂 Project Notes
index.html — Game + UI + wallet/contract integration
Leaderboard is displayed by calling the contract directly (read-only calls)
📌 Support / Links
GitHub: (add your repo link)
X/Twitter: (add your handle)
Base: @base
📜 License
MIT License. Made with ❤️ for Base on-chain arcade fun.
