import "./style.scss"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"

const CollapsibleRow = ({ contents, hiddenElem, modalElem }) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <>
      <div className="collapsible-row" onClick={toggleCollapsed}>
        <div>{contents[0]}</div>
        <div>{contents[1]}</div>
        <div>{contents[2]}</div>
        <div>
          {collapsed ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </div>
      </div>
      {collapsed ? hiddenElem : ""}
    </>
  )
}

export default CollapsibleRow
