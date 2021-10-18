import "./style.scss"
import Layout from "../../components/layout"
import CollapsibleRow from "../../components/collapsible-row"
import HiddenRow from "components/hidden-row"
import { connect } from "react-redux"
import usePortal from "react-cool-portal"
import { useEffect, useState } from "react"
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Dashboard = ({ modalOpen, closeModal }) => {
  const form1 = <HiddenRow />
  const [copied, setCopied] = useState(false)

  const { Portal, show, hide } = usePortal({
    defaultShow: false, // The default visibility of portal, default is true
    onHide: () => {
      closeModal()
    },
  })

  useEffect(() => {
    if (modalOpen) show()
    else hide()
  }, [modalOpen])

  return (
    <Layout>
      <Portal>
        <div className={`modal modal-open`} tabIndex={-1}>
          <div
            className="modal-dialog"
            role="dialog"
            aria-labelledby="modal-label"
            aria-modal="true"
          >
            <div className="modal-header">
              <h5 id="modal-label" className="modal-title">
                ROI
              </h5>
              <button
                className="modal-close"
                onClick={hide}
                type="button"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <table>
                <thead>
                  <tr>
                    <td>Days</td>
                    <td>ROI:</td>
                    <td>Income Per 1 BNB:</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>3.5%</td>
                    <td>0.035</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>27.2%</td>
                    <td>0.272</td>
                  </tr>
                  <tr>
                    <td>30</td>
                    <td>180.7%</td>
                    <td>1.807</td>
                  </tr>
                  <tr>
                    <td>90</td>
                    <td>211.2%</td>
                    <td>21.112</td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      Calculated based on compuouding 1x daily.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Portal>
      <div className="dashboard-containers">
        <div className="container-one">
          <div className="well plan-container">
            <h1>Stake BNB</h1>
            <CollapsibleRow
              contents={["Dasy", "%Daily", "Total"]}
              hiddenElem={null}
            />
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
                <p className="bold">0.00000000 BNB</p>
                <p>$ 0.00000000</p>
              </div>
              <div className="farm-container-piece-button">
                <button>Harvest</button>
              </div>
            </div>
            <div className="farm-container-piece">
              <div className="farm-container-piece-text">
                <p>BNB in wallet:</p>
                <p className="bold">0.89722587 BNB</p>
                <p>$ 378.52165147</p>
              </div>
              <div className="farm-container-piece-button">
                <button>History</button>
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
                <CopyToClipboard text="0x35a2333333333333333333333333332" onCopy={() => setCopied(true)}>
                  <button data-tip={copied ? "copied" : "copy"} title={copied ? "Copied" : "Copy"}>Copy</button>
                </CopyToClipboard>
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
  closeModal: () => dispatch({
    type: "CLOSE_MODAL",
  }),

})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
