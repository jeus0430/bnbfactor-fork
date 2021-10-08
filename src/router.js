import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "containers/home"
import Dashboard from "containers/dashboard"

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </Router>
)

export default AppRouter
