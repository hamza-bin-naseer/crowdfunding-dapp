
# 🪙 Crowdfunding DApp

This is a decentralized crowdfunding application built with **React** and **Solidity**, deployed on a **local Hardhat blockchain**. Users can create fundraising campaigns and contribute using their crypto wallets.

---

## 🚀 Features

* Create and manage crowdfunding campaigns
* Contribute securely using MetaMask
* Local Ethereum development using Hardhat

---

## 📦 Prerequisites

Before getting started, make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)
* [MetaMask Extension](https://metamask.io/)
* [Hardhat](https://hardhat.org/) (installed via `npm install` below)

---

## 🔧 How to Run the App Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/crowdfunding-dapp.git
cd crowdfunding-dapp
```

---

### 2️⃣ Install Dependencies

Run the following command in the root directory to install all necessary packages:

npm install


### 3️⃣ Start the Local Hardhat Network

Start your local blockchain using:

npx hardhat node


> 📝 **Note:** Leave this terminal running. It acts as your local blockchain network.

---

### 4️⃣ Deploy the Smart Contract

Open a **new terminal tab/window**, and run:

npx hardhat run scripts/deploy.js --network localhost

This will deploy the contract to your local Hardhat network. After deployment, copy the **contract address** printed in the terminal.

---

### 5️⃣ Configure the Frontend

Open the file:

Context/contants.js

Paste the copied **contract address** and make sure the ABI is correctly imported or linked.

Example:

export const CONTRACT_ADDRESS = "0xYourContractAddressHere";

---

### 6️⃣ Run the Frontend App

Now start the React frontend:

npm run dev

Visit your app in the browser:
👉 `http://localhost:3000`

---

### 7️⃣ Connect MetaMask to Localhost

1. Open MetaMask extension.
2. Click the network dropdown > "Add Network" (if Hardhat not already there).
3. Use the following values to connect:

```
Network Name: Hardhat
RPC URL: http://127.0.0.1:8545
Chain ID: 31337
```

4. Import one of the private keys shown in the Hardhat terminal into MetaMask.

> 🔐 Use these test accounts ONLY in development — never on mainnet.

---

### ✅ You’re Ready!

* Go to the web app.
* Connect your MetaMask wallet.
* Start creating or contributing to crowdfunding campaigns.

Enjoy your decentralized fundraising experience! 🚀

---

## 🛠 Tech Stack

* **Frontend:** React.js
* **Blockchain:** Solidity, Hardhat
* **Wallet:** MetaMask

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
