import { Link } from "react-router-dom"
import "./style.scss"
import logo from "../../resources/img/logo.png"

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo" />
        <span>BNBFactor</span>
      </Link>

      <span>0x3506...c2f6</span>
    </header>
  )
}

export default Header
