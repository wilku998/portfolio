import React from "react"
import style, { NavLink } from "./navigationStyles"

const links = [
  { link: "/", title: "O mnie" },
  { link: "/projekty", title: "Projekty" },
  { link: "/kontakt", title: "Kontakt" },
]

const Navigation = ({ className }) => {
  return (
    <nav className={className}>
      {links.map(e => (
        <NavLink
          to={e.link}
          key={e.link}
          //  activeClassName="navLinkActive"
        >
          {e.title}
        </NavLink>
      ))}
    </nav>
  )
}

export default style(Navigation)
