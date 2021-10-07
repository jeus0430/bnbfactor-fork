import "./style.scss"
import Haze from "../../resources/img/haze.png"
import Certik from "../../resources/img/certik.svg"
import Dappradar from "../../resources/img/dappradar.svg"
import Youtube from "../../resources/img/youtube.svg"
import Twitter from "../../resources/img/twitter.png"

const Footer = () => {
  return (
    <footer>
      <a
        href="https://hazecrypto.net/bnbfactor"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Haze} alt="haze" />
      </a>
      <a
        href="https://www.certik.org/projects/bnbfactor"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Certik} alt="haze" />
      </a>
      <a
        href="https://dappradar.com/binance-smart-chain/high-risk/bnbfactor"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Dappradar} alt="haze" />
      </a>
      <a
        href="https://www.youtube.com/c/bnbfactor"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Youtube} alt="haze" />
      </a>
      <a href="https://twitter.com/BNBFactor" target="_blank" rel="noreferrer">
        <img src={Twitter} alt="haze" style={{ height: "40px" }} />
      </a>
    </footer>
  )
}

export default Footer
