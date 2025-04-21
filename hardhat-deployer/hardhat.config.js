require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: ["0x18cbad1f82cdeb8b82462e56b9122f0758c5c001fb43536aea1901feb2f0b592"]
    }
  }
};
