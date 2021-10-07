import Layout from "../../components/layout"
import "./style.scss"
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
            <a>Dashboard</a>
            <a>Information</a>
            <a>Verified Contract</a>
            <a>Telegram</a>
          </div>
        </div>
      </section>
      <section className="down-section">
        <div className="container">12312321</div>
      </section>
    </Layout>
  )
}

export default Home
