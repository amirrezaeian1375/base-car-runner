# 🏎️ Base Car | On-Chain Racing Experience

![Base Car Runner](https://i.postimg.cc/bNLccGBw/1-1.jpg)

**Base Car** is a high-speed, 3-lane arcade racer built on the **Base Mainnet**. Challenge your reflexes, dodge high-speed AI traffic, collect **GAS** items, and etch your name into history on our verifiable on-chain leaderboard.

🚀 **[LIVE DEMO - PLAY NOW]([REPLACING_SOON_WITH_VERCEL_LINK])**

---

## 🌟 Key Features

- **Decentralized Leaderboard:** High scores are stored permanently on the Base Blockchain.
- **Dynamic Difficulty:** The race intensifies as your score increases—speed and spawn rates scale with your skill.
- **Social-Ready:** Instant sharing to **X** and **Farcaster** with custom achievement cards.
- **Security First:** No asset approvals required. The game only interacts with your score data.
- **Fully Responsive:** Optimized for both Desktop (Keyboard) and Mobile (Touch).

---

## 🎮 How to Play

### 💻 Desktop
- **Steer Left:** `A` or `Left Arrow`
- **Steer Right:** `D` or `Right Arrow`

### 📱 Mobile
- **Steer:** Tap the Left or Right side of the screen to switch lanes.

**Goal:** Collect green **GAS** orbs for **+100 points**. You have **3 lives**. Avoid the red cars at all costs!

---

## 🛡️ Smart Contract Details

Transparency is at the heart of Base Car. All high scores are verified and stored via our smart contract.

- **Network:** Base Mainnet (Chain ID: `8453`)
- **Contract Address:** `0xcA6A81a6676cA9A976A867997D061C0a6F7f495f`

### Contract Interface (ABI)
```javascript
[
  "function submitScore(uint256 score) external",
  "function getTopScores() external view returns (tuple(address player, uint256 score, uint256 timestamp)[])"
]
