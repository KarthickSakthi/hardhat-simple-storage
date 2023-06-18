require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "hardhat",
  networks:{
    mumbai: {
      url: "https://rpc-mumbai.matic.today", // Mumbai RPC endpoint
      chainId: 80001, // Mumbai chain ID
      accounts: [process.env.PRIVATE_KEY],
    },
  }
};
