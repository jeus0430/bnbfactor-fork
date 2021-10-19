import { useState } from "react"
import { ethers } from "ethers"
import "./style.scss"
import Calculator from "../../resources/img/calculator.svg"
import { connect } from "react-redux"
import { getContractWithSigner } from "helpers/contract"
require('dotenv').config()

const HiddenRow = ({ openModal, daily }) => {
  const [earn, setEarn] = useState(daily > 2 ? "0BNB" : "∞")
  const [amount, setAmount] = useState("0")
  const calcEarn = (amount) => {
    switch (parseFloat(daily)) {
      case 2:
        return "∞"
      case 4:
        return parseFloat(amount) * daily * 40 / 100 + "BNB"
      case 3.5:
        return parseFloat(amount) * daily * 60 / 100 + "BNB"
      case 3:
        return parseFloat(amount) * daily * 90 / 100 + "BNB"
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
    }
  };

  const contract = getContractWithSigner()
  const handleStake = async () => {
    await contract.invest("0x0000000000000000000000000000000000000000", plan(), { gasLimit: 230000, gasPrice: ethers.utils.parseUnits('9.0', 'gwei'), value: ethers.utils.parseEther(amount) });
    // await contract.invest(0x0000000000000000000000000000000000000011, plan());
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
