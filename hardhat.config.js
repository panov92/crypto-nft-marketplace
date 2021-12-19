require("@nomiclabs/hardhat-waffle");
const projectId = "f12eef180b7248d39b77f06696e47d69";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    testnet: {
      url: `https://ropsten.infura.io/v3/${projectId}`,
      accounts: []
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${projectId}`,
      accounts: []
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
