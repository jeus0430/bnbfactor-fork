import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "containers/home"

import { ROUTERS } from "configurations"

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTERS.HOME} component={Home} />
    </Switch>
  </Router>
)

export default AppRouter
