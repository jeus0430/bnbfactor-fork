import "./style.scss"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import HiddenRow from "components/hidden-row"

const CollapsibleRow = ({ contents, daily }) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <>
      <div className={"collapsible-row" + ((daily > 0) ? '' : ' not-foldable')} onClick={toggleCollapsed}>
        <div>{contents[0]}</div>
        <div>{contents[1]}</div>
        <div>{contents[2]}</div>
        <div>
          {daily > 0 ? (
            collapsed ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )) : ""}
        </div>
      </div>
      {daily > 0 ? (collapsed ? <HiddenRow daily={daily} /> : "") : ""}
    </>
  )
}

export default CollapsibleRow
