import "./style.scss"
import Calculator from "../../resources/img/calculator.svg"
import { connect } from "react-redux"

const HiddenRow = ({ openModal }) => {
  const a = () => {
    console.log("123")
    openModal()
  }

  return (
    <div className="hidden-row">
      <div className="hidden-row-up">
        <span>Total Earn: ∞</span>
        <img class="calculator-img" onClick={a} src={Calculator} alt="calculator" />
      </div>
      <div className="hidden-row-down">
        <input placeholder="Enter BNB amount" />
        <button>Stake</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  openModal: () => {
    console.log("dispatched")
    dispatch({
      type: "OPEN_MODAL",
    })
  },
})

export default connect(null, mapDispatchToProps)(HiddenRow)
