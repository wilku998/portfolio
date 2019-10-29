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
        <NavLink key={e.link} activeClassName="navLinkActive" to={e.link}>
          <span>{e.title}</span>
        </NavLink>
      ))}
    </nav>
  )
}

export default style(Navigation)
