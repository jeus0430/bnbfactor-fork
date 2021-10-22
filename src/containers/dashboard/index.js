import "./style.scss"
import Layout from "../../components/layout"
import CollapsibleRow from "../../components/collapsible-row"
import { connect } from "react-redux"
import usePortal from "react-cool-portal"
import { useEffect, useState } from "react"
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { getContractWithSigner } from "helpers/contract"
import { closeModal } from "reducers/actions"
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
const Web3 = require('web3');
require("dotenv").config()

const Dashboard = ({ walletAddress, currency, modalOpen, closeModal }) => {
  const [copied, setCopied] = useState(false)
  const [ava, setAva] = useState(0)
  const [balan, setBalan] = useState(0)

  var web3 = new Web3(window.ethereum);
  const contract = getContractWithSigner()

  const { Portal, show, hide } = usePortal({
    defaultShow: false, // The default visibility of portal, default is true
    onHide: () => {
      closeModal()
    },
  })

  const updateBalance = (walletAddress) => {
    web3.eth.getBalance(walletAddress).then(
      (val) => {
        setBalan(web3.utils.fromWei(val))
      }
    )
  }

  const updateAvailable = (walletAddress) => {
    contract.getUserAvailable(walletAddress).then(
      (val) => {
        setAva(parseFloat(val.toString()) / Math.pow(10, 18))
      }
    )
  }

  useEffect(() => {
    if (walletAddress) {
      updateBalance(walletAddress)
      updateAvailable(walletAddress)
    }
  }, [walletAddress])

  const doHarvest = async () => {
    contract.withdraw({
      from: walletAddress,
      gasLimit: 4000000,
      gasPrice: 40000000000
    }).then(
      () => {
        NotificationManager.success('Withdraw success')
        updateBalance(walletAddress)
        updateAvailable(walletAddress)
      },
      () => {
        NotificationManager.error('Withdraw failed')
      }
    )
  }

  useEffect(() => {
    if (modalOpen) show()
    else hide()
  }, [modalOpen, hide, show])

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
              contents={["Days", "%Daily", "Total"]}
              daily="0"
            />
            <CollapsibleRow
              contents={["Forever", "2%", "∞"]}
              daily="2"
            />
            <CollapsibleRow
              contents={["40", "4%", "160%"]}
              daily="4"
            />
            <CollapsibleRow
              contents={["60", "3.5%", "210%"]}
              daily="3.5"
            />
            <CollapsibleRow
              contents={["90", "3%", "270%"]}
              daily="3"
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
                <p className="bold">{ava.toFixed(8)} BNB</p>
                <p>$ {(ava * currency).toFixed(8)}</p>
              </div>
              <div className="farm-container-piece-button">
                <button disabled={!ava} onClick={doHarvest}>Harvest</button>
              </div>
            </div>
            <div className="farm-container-piece">
              <div className="farm-container-piece-text">
                <p>BNB in wallet:</p>
                <p className="bold">{parseFloat(balan).toFixed(8)} BNB</p>
                <p>$ {(parseFloat(balan) * currency).toFixed(8)}</p>
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
                <p>https://bnbfactor.com/?r= {walletAddress.slice(0, 4) + '...'}</p>
                <CopyToClipboard text={"http://localhost:3000?r=" + walletAddress} onCopy={() => setCopied(true)}>
                  <button data-tip={copied ? "copied" : "copy"} title={copied ? "Copied" : "Copy"}>Copy</button>
                </CopyToClipboard>
              </div>
            </div>
            <p style={{ marginBottom: "1rem" }}>Invited users: 0</p>
            <p>Total Earnings: 0 BNB</p>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  modalOpen: state.modalOpen,
  currency: state.currency,
  walletAddress: state.walletAddress
})

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),

})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
