import { useState } from "react"
import "./style.scss"
import Calculator from "../../resources/img/calculator.svg"
import { connect } from "react-redux"

const HiddenRow = ({ openModal, daily }) => {
  const [earn, setEarn] = useState(daily > 2 ? "0BNB" : "∞")
  const calcEarn = (amount) => {
    if (daily > 2)
      return parseFloat(amount) * daily / 100 + "BNB"
    else
      return "∞"
  }
  const a = () => {
    openModal()
  }

  return (
    <div className="hidden-row">
      <div className="hidden-row-up">
        <span>Total Earn: {earn}</span>
        <img className="calculator-img" onClick={a} src={Calculator} alt="calculator" />
      </div>
      <div className="hidden-row-down">
        <input type="number" defaultValue="0" onChange={ev => setEarn(calcEarn(ev.target.value))} placeholder="Enter BNB amount" />
        <button>Stake</button>
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
