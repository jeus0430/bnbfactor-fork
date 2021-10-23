import { ethers } from "ethers"
import contractABI from "abis/BNBFactor.json"
require("dotenv").config()

// Contract can be used to write Contract
export const getContractWithSigner = () => {
  if (window.ethereum) {
    const infuraProvider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = infuraProvider.getSigner()
    const contract = new ethers.Contract(
      process.env.REACT_APP_CONTRACT_ADDRESS,
      contractABI.abi,
      signer
    )
    return contract
  }
}

// Contract can be used to read Contract
export const getContractWithoutSigner = () => {
  if (window.ethereum) {
    const infuraProvider = new ethers.providers.Web3Provider(window.ethereum)

    const contract = new ethers.Contract(
      process.env.REACT_APP_CONTRACT_ADDRESS,
      contractABI.abi,
      infuraProvider
    )

    return contract
  }
}
