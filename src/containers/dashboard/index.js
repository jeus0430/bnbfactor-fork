import "./style.scss"
import Layout from "../../components/layout"
import CollapsibleRow from "../../components/collapsible-row"
import HiddenRow from "components/hidden-row"
import { connect } from "react-redux"
import Dialog from "rc-dialog"

const Dashboard = ({ modalOpen, closeModal }) => {
  const form1 = <HiddenRow />

  return (
    <Layout>
      {modalOpen
        ? "123"
        : // <Dialog title="title" onClose={closeModal} visible>
          //   <p> first dialog</p>
          // </Dialog>
          "456"}
      <div className="dashboard-containers">
        <div className="container-one">
          <div className="well plan-container">
            <h1>Stake BNB</h1>
            <CollapsibleRow
              contents={["Forever", "2%", "∞"]}
              hiddenElem={form1}
            />
            <CollapsibleRow
              contents={["40", "4%", "160%"]}
              hiddenElem={form1}
            />
            <CollapsibleRow
              contents={["60", "3.5%", "210%"]}
              hiddenElem={form1}
            />
            <CollapsibleRow
              contents={["90", "3%", "270%"]}
              hiddenElem={form1}
            />
          </div>
          <div className="well help-container">
            <h1>Read before use</h1>
            <p>
              The principal deposit cannot be withdrawn, the only return users
              can get are daily dividends and referral rewards. Payments is
              possible only if contract balance have enough BNB. Please analyze
              the transaction history and balance of the smart contract before
              investing. High risk - high profit, DYOR
            </p>
          </div>
        </div>
        <div className="container-two">
          <div className="well farm-container">
            <h1>Your Farm</h1>
            <div className="farm-container-piece">
              <div className="farm-container-piece-text">
                <p>BNB to Harvest:</p>
                <p>0.00000000 BNB</p>
                <p>$ 0.00000000</p>
              </div>
              <div className="farm-container-piece-button">
                <button>Harvest</button>
              </div>
            </div>
            <div className="farm-container-piece">
              <div className="farm-container-piece-text">
                <p>BNB in wallet:</p>
                <p>0.89722587 BNB</p>
                <p>$ 378.52165147</p>
              </div>
              <div className="farm-container-piece-button">
                <button>Harvest</button>
              </div>
            </div>
          </div>
          <div className="well affiliate-container">
            <h1>Affiliate Program</h1>
            <p>1 LVL (your invited user) - 7%</p>
            <p>2 LVL (user invited by your 1 lvl) - 3%</p>
            <p>3 LVL - 1.5%</p>
            <p>4 LVL - 1%</p>
            <p>5 LVL - 0.5%</p>
            <div className="affiliate-container-well">
              <p>Your personal link:</p>
              <div>
                <p>https://bnbfactor.com/?r=0x3...</p>
                <button>Copy</button>
              </div>
            </div>
            <p style={{ marginBottom: "1rem" }}>Invited users: 0</p>
            <p>Total Earnings: 0 BNB</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  modalOpen: state.modalReducer.modalOpen,
})

const mapDispatchToProps = (dispatch) => ({
  closeModal: () =>
    dispatch({
      type: "MODAL_CLOSE",
    }),
})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
