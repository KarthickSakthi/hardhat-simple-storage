require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify")
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "hardhat",
  networks:{
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com", // sepolia RPC endpoint
      chainId: 80001, // sepolia chain ID
      accounts: [""],
    }
  },
  etherscan:{
    apiKey: ""
  }
};
