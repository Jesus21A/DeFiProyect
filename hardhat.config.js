require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/demo", // URL pública de Alchemy
        blockNumber: 18500000 // Block reciente con PYUSD
      }
    }
  }
};