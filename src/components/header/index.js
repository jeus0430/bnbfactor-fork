import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import "./style.scss"
import logo from "../../resources/img/logo.png"

const Header = ({ walletAddress }) => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo" />
        <span>BNBFactor</span>
      </Link>


      <span>{walletAddress.substr(0, 6) + '...' + walletAddress.substr(walletAddress.length - 4)}</span>
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    walletAddress: state.walletAddress,
  }
}

export default connect(mapStateToProps)(Header)