import NavBarItem from "./navBarItem"
import React from "react"

const AnchorLink = ({ children, href, className, icon, tabIndex, testId }) => {
  return (
    <a href={href}>
      <NavBarItem
        href={href}
        className={className}
        icon={icon}
        tabIndex={tabIndex}
        testId={testId}
      >
        {children}
      </NavBarItem>
    </a>
  )
}

export default AnchorLink
