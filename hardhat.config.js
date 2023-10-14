require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify")
require("dotenv").config();
require("./task/block-number");
require("hardhat-gas-reporter");
require("solidity-coverage");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "hardhat",
  networks:{
    mumbai: {
      url: "https://greatest-still-emerald.matic-testnet.discover.quiknode.pro/4ae6c079b0b708107fad711417ab6b6b3c580fbe/", // sepolia RPC endpoint
      chainId: 80001, // sepolia chain ID
      accounts: [""],
    }
  },
  etherscan:{
    apiKey: ""
  },
  gasReporter:{
    enabled:false,
    outputFile:"gas-report.txt",
    noColors:true,
    currency:"USD",
    coinmarketcap:"",
    token:"MATIC"
  }
};
