import "./style.scss"
import Layout from "../../components/layout"
import CollapsibleRow from "../../components/collapsible-row"
import HiddenRow from "components/hidden-row"

const Dashboard = () => {
  const form1 = <HiddenRow />
  return (
    <Layout>
      <div className="dashboard-containers">
        <div className="container-one">
          <div className="well plan-container">
            <h1>Stake BNB</h1>
            <CollapsibleRow
              contents={["Forever", "2%", "∞"]}
              hiddenElem={form1}
            />
            <CollapsibleRow
              contents={["40", "4%", "160%"]}
              hiddenElem={form1}
            />
            <CollapsibleRow
              contents={["60", "3.5%", "210%"]}
              hiddenElem={form1}
            />
            <CollapsibleRow
              contents={["90", "3%", "270%"]}
              hiddenElem={form1}
            />
          </div>
        </div>
        <div className="container-two"></div>
      </div>
    </Layout>
  )
}

export default Dashboard
