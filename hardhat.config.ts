import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter";
import "hardhat-docgen";
import "@nomicfoundation/hardhat-chai-matchers";
require("hardhat-contract-sizer");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("hardhat-deploy");
require("hardhat-abi-exporter");

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        //Polygon TestNet Forking
        url: "https://polygon-mumbai.infura.io/v3/33304103dfd14b8dbea7d3b6de1b1355",
      },
    },
    localhost: {
      url: "http://127.0.0.1:7545",
    },
    // Ganache connection
    ganache: {
      url: "http://localhost:7545",
      // accounts: [privateKey1, privateKey2, ...]
    },

    // Polygon MainNet
    polygonmain: {
      url: "https://polygon-mainnet.infura.io/v3/33304103dfd14b8dbea7d3b6de1b1355",
      //accounts: [process.env.PRIVATE_KEY],
    },

    // Polygon Mumbai
    polygonmumbai: {
      url: "https://polygon-mumbai.infura.io/v3/ec37bff7ab5849c9a90ecc2744a48059",
      accounts: [
        "654d17af5538eb46beeebfde28223d020be1565f99a0bde3b6551fa0a4cd21f8", // address1
        "03b95edaaa63d157f779613efe94feb665b16874abab878c9c6712567c386839", // address2
        "e8074cab3c6198d484b77f76f126695a5999d72ee124aeb02814adbcae4d1af2", // address3
        "a20b321affe9b3c0b258f6d67edf729e1d70b16f3432cfcd73089aa07e7c7b1f", // address4
      ],
      allowUnlimitedContractSize: true,
      gas: 2100000,
      gasPrice: 80000000000,
    },

    // Sepolia
    sepolia: {
      url: "https://sepolia.infura.io/v3/ec37bff7ab5849c9a90ecc2744a48059",
      accounts: [
        "654d17af5538eb46beeebfde28223d020be1565f99a0bde3b6551fa0a4cd21f8", // address1
        "03b95edaaa63d157f779613efe94feb665b16874abab878c9c6712567c386839", // address2
        "e8074cab3c6198d484b77f76f126695a5999d72ee124aeb02814adbcae4d1af2", // address3
        "a20b321affe9b3c0b258f6d67edf729e1d70b16f3432cfcd73089aa07e7c7b1f", // address4
      ],
      allowUnlimitedContractSize: true,
      gas: 2100000,
    },
  },

  solidity: {
    compilers: [
      {
        version: "0.8.17",
        settings: {
          evmVersion: "london",
          optimizer: { enabled: true, runs: 200 },
        },
      },
    ],
  },

  /**docgen: {
    path: "./docs",
    clear: true,
    runOnCompile: true,
  },*/

  gasReporter: {
    enabled: true,
    currency: "EUR",
    gasPriceApi:
      "https://api.polygonscan.com/api?module=proxy&action=eth_gasPrice",
    coinmarketcap: "8e5f364f-52a8-4f58-a425-3a0c6d2193e5",
    token: "MATIC",
  },

  abiExporter: {
    path: "./abi",
    runOnCompile: true,
    clear: true,
    pretty: false,
    format: "json",
  },
  allowUnlimitedContractSize: true,
};

export default config;
