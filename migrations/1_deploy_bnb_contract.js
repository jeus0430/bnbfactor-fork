require("dotenv").config()

const { COMMISSION_WALLET_ADDRESS } = process.env
const BNBFactor = artifacts.require("BNBFactor")
module.exports = async function (deployer) {
  await deployer.deploy(BNBFactor, COMMISSION_WALLET_ADDRESS)
}
