import React from "react"
import style, { NavLink, Side, NavButton } from "./navigationStyles"
import { Link } from "gatsby"
import chooseLang from "../../functions/chooseLang"

const links = [
  { link: "/", pl: "O mnie", en: "About me" },
  { link: "/projekty", pl: "Projekty", en: "Projects" },
  { link: "/kontakt", pl: "Kontakt", en: "Contact" },
]

const Navigation = ({ className, lang }) => {
  const onLangClick = e => {
    lang.setLang(e.target.lang)
  }
  return (
    <nav className={className}>
      <Side>
        {["en", "pl"].map(e => (
          <NavButton
            onClick={onLangClick}
            isSelected={e === lang.lang}
            lang={e}
            role="button"
            key={e}
          >
            <span lang={e}>{e}</span>
          </NavButton>
        ))}
      </Side>
      <Side>
        {links.map(e => (
          <NavLink
            as={Link}
            key={e.link}
            activeClassName="navLinkActive"
            to={e.link}
          >
            <span>{chooseLang(e, lang)}</span>
          </NavLink>
        ))}
      </Side>
    </nav>
  )
}

export default style(Navigation)
