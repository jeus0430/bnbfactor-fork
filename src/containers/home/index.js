import { Link } from "react-router-dom"
import Layout from "../../components/layout"
import "./style.scss"
import Ironclad from "../../resources/img/ironclad.svg"
import Higharp from "../../resources/img/high-arp.svg"
import Customersupport from "../../resources/img/customer-support.svg"

const Home = () => {
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
              <p className="up-section-wells-one-value">5302.721 BNB</p>
              <p className="up-section-wells-one-help">$ 2362203.08</p>
            </div>
            <div className="up-section-wells-one">
              <p className="up-section-wells-one-title">
                Total Referral Earnings
              </p>
              <p className="up-section-wells-one-value">689.354 BNB</p>
              <p className="up-section-wells-one-help">$ 307086.40</p>
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

export default Home
