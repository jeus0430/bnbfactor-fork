import { useState } from "react"
import { ethers } from "ethers"
import "./style.scss"
import Calculator from "../../resources/img/calculator.svg"
import { connect } from "react-redux"
import { getContractWithSigner } from "helpers/contract"
import { getCurrentWalletConnected } from "helpers/wallet"
require('dotenv').config()

const HiddenRow = ({ openModal, daily }) => {
  const [earn, setEarn] = useState(daily > 2 ? "0BNB" : "∞")
  const [amount, setAmount] = useState("0")
  const [addr, setAddr] = useState()
  const calcEarn = (amount) => {
    if (isNaN(parseFloat(amount)))
      return "0BNB"
    switch (parseFloat(daily)) {
      case 2:
        return "∞"
      case 4:
        return (parseFloat(amount) * daily * 40 / 100).toFixed(3) + "BNB"
      case 3.5:
        return (parseFloat(amount) * daily * 60 / 100).toFixed(3) + "BNB"
      case 3:
        return (parseFloat(amount) * daily * 90 / 100).toFixed(3) + "BNB"
      default:
        return "0BNB"
    }
  }
  const a = () => {
    openModal()
  }
  const handleChange = (ev) => {
    setAmount(ev.target.value)
    setEarn(calcEarn(parseFloat(ev.target.value)))
  }

  const plan = () => {
    switch (parseFloat(daily)) {
      case 2:
        return 0;
      case 4:
        return 1;
      case 3.5:
        return 2;
      case 3:
        return 3;
      default:
        return 0;
    }
  };
  const contract = getContractWithSigner()
  const handleStake = async () => {
    setAddr(await getCurrentWalletConnected()['address'])
    const c = sessionStorage.getItem('bnb-factor-referral')
    let referral = "0x0000000000000000000000000000000000000000"
    if (/0x[a-fA-F0-9]{40}/.test(c))
      referral = c
    await contract.invest(referral, plan(), { from: addr, gasLimit: 4000000, gasPrice: 40000000000, value: ethers.utils.parseEther(amount) });
  }

  return (
    <div className="hidden-row">
      <div className="hidden-row-up">
        <span>Total Earn: {earn}</span>
        <img className="calculator-img" onClick={a} src={Calculator} alt="calculator" />
      </div>
      <div className="hidden-row-down">
        <input type="number" value={amount} onChange={handleChange} placeholder="Enter BNB amount" />
        <button onClick={handleStake}>Stake</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  openModal: () => {
    dispatch({
      type: "OPEN_MODAL",
    })
  },
})

export default connect(null, mapDispatchToProps)(HiddenRow)
