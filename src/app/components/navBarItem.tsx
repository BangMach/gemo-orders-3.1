import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { usePathname } from "next/navigation"

const NavBarItem = ({ children, href, className, icon, tabIndex, testId }) => {
  const activeClass = "navbar-item-active"
  const activeClasses = className ? `${className} ${activeClass}` : activeClass
  const pathname = usePathname()

  return (
    <span className="d-inline-flex align-items-center navbar-item">
      {icon && <FontAwesomeIcon icon={icon} className="mr-3" />}
      <span
        className={pathname === href ? activeClasses : className}
        tabIndex={tabIndex}
        data-testid={testId}
      >
        {children}
      </span>
    </span>
  )
}

export default NavBarItem
