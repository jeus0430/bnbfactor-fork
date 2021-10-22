require("dotenv").config()
const HDWalletProvider = require("@truffle/hdwallet-provider")
const { MNEMONIC, BSCSCANAPIKEY } = process.env

module.exports = {
  networks: {
    testnet: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      timeoutBlocks: 200,
      production: true, // Treats this network as if it was a public net. (default: false)
    },
    bsc: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: "^0.8.9", // Fetch exact version from solc-bin (default: truffle's version)
      settings: {
        optimizer: {
          enabled: false,
          runs: 200,
        },
        evmVersion: "byzantium",
      },
    },
  },
  contracts_directory: "./contracts",
  contracts_build_directory: "./src/abis",
  plugins: ["truffle-plugin-verify"],
  etherscan: {
    apiKey: BSCSCAN_API_KEY,
  },
}
