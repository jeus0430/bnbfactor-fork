import "./style.scss"
import Calculator from "../../resources/img/calculator.svg"

const HiddenRow = () => {
  return (
    <div className="hidden-row">
      <div className="hidden-row-up">
        <span>Total Earn: ∞</span>
        <img src={Calculator} alt="calculator" />
      </div>
      <div className="hidden-row-down">
        <input placeholder="Enter BNB amount" />
        <button>Stake</button>
      </div>
    </div>
  )
}

export default HiddenRow
