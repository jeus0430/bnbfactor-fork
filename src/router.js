import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { connect } from 'react-redux';
import Home from "containers/home"
import { connectWallet, getProvider } from "helpers/wallet"
import Dashboard from "containers/dashboard"
import { changeNetwork, changeWalletAction, changeCurrency } from "reducers/actions"
import { useEffect } from "react";
import axios from "axios"
require("dotenv").config()

const AppRouter = ({ networkID, changeReduxWallet, changeReduxNetwork, changeReduxCurrency }) => {
  useEffect(() => {
    if (networkID != process.env.REACT_APP_CHAIN_ID) {
      connectWallet()
    }
  }, [networkID])

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.enable();

      window.ethereum.on('accountsChanged', function (accounts) {
        changeReduxWallet(accounts[0])
      });

      window.ethereum.on('networkChanged', function (networkId) {
        changeReduxNetwork(networkId)
      });

      return () => {
        // Remove event handlers attacted to window.ethereum
        window.ethereum.removeAllListeners(['accountChanged', 'networkChanged'])
      }
    } else {
      console.log('No Web3 Detected')
    }
  }, [window.ethereum])

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

const mapStateToProps = (state) => {
  return {
    networkID: state.networkID
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeReduxNetwork: (id) => dispatch(changeNetwork(id)),
    changeReduxWallet: (address) => dispatch(changeWalletAction(address)),
    changeReduxCurrency: (currency) => dispatch(changeCurrency(currency))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter)
