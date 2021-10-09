import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "containers/home"
import Dashboard from "containers/dashboard"
import { Provider } from "react-redux"
import store from "./store"

const AppRouter = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  </Provider>
)

export default AppRouter
