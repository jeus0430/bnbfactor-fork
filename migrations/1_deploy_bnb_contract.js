require("dotenv").config()

const { COMMISSIONWALLET_ADDRESS } = process.env
const BNBFactor = artifacts.require("BNBFactor")
module.exports = async function (deployer) {
  await deployer.deploy(BNBFactor, COMMISSIONWALLET_ADDRESS)
}
