import "./style.scss"
import Layout from "../../components/layout"
import CollapsibleRow from "../../components/collapsible-row"
import { connect } from "react-redux"
import { getCurrentWalletConnected } from "helpers/wallet"
import usePortal from "react-cool-portal"
import { useEffect, useState } from "react"
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { getContractWithSigner } from "helpers/contract"
import axios from "axios"

const Web3 = require('web3');
require("dotenv").config()

const Dashboard = ({ modalOpen, closeModal }) => {
  const [copied, setCopied] = useState(false)
  const [ava, setAva] = useState(0)
  const [curren, setCurren] = useState(0)
  const [addr, setAddr] = useState("")
  const [balan, setBalan] = useState(0)

  const contract = getContractWithSigner()
  const { Portal, show, hide } = usePortal({
    defaultShow: false, // The default visibility of portal, default is true
    onHide: () => {
      closeModal()
    },
  })


  useEffect(async () => {
    setCurren((await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd'))['data']['binancecoin']['usd'])
    const address = await getCurrentWalletConnected()
    setAddr(address['address'])
    console.log();
    var web3 = new Web3(window.ethereum);
    if (address['address']) {
      const bal = await web3.eth.getBalance(address['address'])
      setBalan(web3.utils.fromWei(bal))
      const av = await contract.getUserAvailable(address['address'])
      setAva(parseFloat(av.toString()) / Math.pow(10, 18))
    }
  }, [])

  const doHarvest = async () => {
    await contract.withdraw({
      from: addr, gasLimit: 4000000, gasPrice: 40000000000
    })
    console.log('withdrawn');
  }

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
                <p>$ {(ava * curren).toFixed(8)}</p>
              </div>
              <div className="farm-container-piece-button">
                <button disabled={!ava} onClick={doHarvest}>Harvest</button>
              </div>
            </div>
            <div className="farm-container-piece">
              <div className="farm-container-piece-text">
                <p>BNB in wallet:</p>
                <p className="bold">{parseFloat(balan).toFixed(8)} BNB</p>
                <p>$ {(parseFloat(balan) * curren).toFixed(8)}</p>
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
                <p>https://bnbfactor.com/?r= {addr.slice(0, 4) + '...'}</p>
                <CopyToClipboard text={addr} onCopy={() => setCopied(true)}>
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
