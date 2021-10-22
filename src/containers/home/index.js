import { useState } from "react"
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import Layout from "../../components/layout"
import Ironclad from "../../resources/img/ironclad.svg"
import Higharp from "../../resources/img/high-arp.svg"
import Customersupport from "../../resources/img/customer-support.svg"
import { useEffect } from "react"
import { getContractWithoutSigner } from "helpers/contract"
import "./style.scss"

const Home = ({ currency, walletAddress }) => {
  const [deposited, setDeposited] = useState(0)

  useEffect(async () => {
    const contract = getContractWithoutSigner();
    setDeposited((await contract.totalInvested()).toString() / Math.pow(10, 18))
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("r");
    if (!window.sessionStorage.getItem("bnb-factor-referral") && c) {
      window.sessionStorage.setItem("bnb-factor-referral", c)
    }
  }, [walletAddress])

  return (
    <Layout>
      <section className="up-section">
        <div className="container">
          <h1>BNBFactor</h1>
          <p>
            #1 Community Experimental yield farm
            <br />
            on Binance Smart Chain
          </p>
          <div className="up-section-wells">
            <div className="up-section-wells-one">
              <p className="up-section-wells-one-title">
                Total Value Deposited
              </p>
              <p className="up-section-wells-one-value">{deposited.toFixed(3)}BNB</p>
              <p className="up-section-wells-one-help">$ {deposited * currency}</p>
            </div>
            <div className="up-section-wells-one">
              <p className="up-section-wells-one-title">
                Total Referral Earnings
              </p>
              <p className="up-section-wells-one-value">{(deposited * 0.13).toFixed(3)} BNB</p>
              <p className="up-section-wells-one-help">$ {(deposited * 0.13 * currency).toFixed(3)}</p>
            </div>
          </div>
          <div className="up-section-btns">
            <Link to="/dashboard">Dashboard</Link>
            <a
              href="https://docs.bnbfactor.com/"
              target="_blank"
              rel="noreferrer"
            >
              Information
            </a>
            <a
              href="https://bscscan.com/address/0x68ACdE780C94901b0Ab1d149FE27f3cAe2228677#code"
              target="_blank"
              rel="noreferrer"
            >
              Verified Contract
            </a>
            <a href="https://t.me/bnbfactor" target="_blank" rel="noreferrer">
              Telegram
            </a>
          </div>
        </div>
      </section>
      <section className="down-section">
        <h2 className="down-section-title">
          Start your yield farm journey
          <br />
          with BNBFactor community
        </h2>
        <div className="down-section-container">
          <div className="down-section-container-item">
            <img src={Ironclad} alt="Ironclad security" />
            <p className="down-section-container-item-title">
              Ironclad security
            </p>
            <p className="down-section-container-item-text">
              <small>
                The smart contract code has been successful audited by 2
                independent companies &nbsp;
                <a href="https://hazecrypto.net/bnbfactor" rel="noreferrer">
                  HazeCrypto&nbsp;
                </a>
                and &nbsp;
                <a
                  href="https://www.certik.org/projects/bnbfactor"
                  refl="noreferrer"
                >
                  CertiK&nbsp;
                </a>
                which guarantees the protection of your assets from all external
                risks.
              </small>
            </p>
          </div>
          <div className="down-section-container-item">
            <img src={Higharp} alt="High & Stable APR" />
            <p className="down-section-container-item-title">
              High & Stable APR
            </p>
            <p className="down-section-container-item-text">
              <small>
                In the code sets the highest APR among all yield farms on
                BSC,rules of a smart contract can’t be changed, nothing can
                affect the amount of income.
              </small>
            </p>
          </div>
          <div className="down-section-container-item">
            <img src={Customersupport} alt="Customer Support" />
            <p className="down-section-container-item-title">
              High & Stable APR
            </p>
            <p className="down-section-container-item-text">
              <small>
                BNBFactor 24/7 provides you our knowledgable and experienced
                customer support team in{" "}
                <a href="https://t.me/bnbfactor" rel="noreferrer">
                  Telegram
                </a>
                .
              </small>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    walletAddress: state.walletAddress,
    networkID: state.networkID,
    currency: state.currency
  }
}

export default connect(mapStateToProps)(Home);