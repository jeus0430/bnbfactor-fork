import { Suspense, lazy } from "react"
import Loading from "components/loading"
import { } from "helpers/wallet"
const AppRouter = lazy(() => import("router"))

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AppRouter />
    </Suspense>
  )
}

export default App
