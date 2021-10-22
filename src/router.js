import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { connect } from 'react-redux';
import Home from "containers/home"
import { connectWallet } from "helpers/wallet"
import Dashboard from "containers/dashboard"
import { changeNetwork, changeWalletAction, changeCurrency } from "reducers/actions"
import { useEffect } from "react";
import axios from "axios"
require("dotenv").config()

const AppRouter = ({ changeReduxWallet, changeReduxNetwork, changeReduxCurrency }) => {
  useEffect(() => {
    connectWallet().then(
      ({ address, networkID }) => {
        changeReduxWallet(address)
        changeReduxNetwork(networkID)
      }
    )
  })

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        changeReduxWallet(accounts[0])
      });

      window.ethereum.on('chainChanged ', (networkId) => {
        changeReduxNetwork(networkId)
      });

      // Remove event handlers attacted to window.ethereum
      return () => {
        window.ethereum.removeAllListeners(['accountChanged', 'networkChanged'])
      }
    } else {
      console.log('No Web3 Detected')
    }
  })

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd').then((val) => {
      if (val) changeReduxCurrency(val['data']['binancecoin']['usd'])
    })
  })

  return <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </Router>
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeReduxNetwork: (id) => dispatch(changeNetwork(id)),
    changeReduxWallet: (address) => dispatch(changeWalletAction(address)),
    changeReduxCurrency: (currency) => dispatch(changeCurrency(currency))
  }
}

export default connect(null, mapDispatchToProps)(AppRouter)
