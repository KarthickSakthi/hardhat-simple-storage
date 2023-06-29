require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify")
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "hardhat",
  networks:{
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/demo", // sepolia RPC endpoint
      chainId: 11155111, // sepolia chain ID
      accounts: [PRIVATE_KEY],
    }
  },
  etherscan:{
    apiKey: ETHERSCAN_API_KEY
  }
};
