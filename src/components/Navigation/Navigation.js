import React, { useLayoutEffect, useState } from "react"
import { NavLink, Side, NavButton, Nav } from "./navigationStyles"
import { Link } from "gatsby"
import chooseLang from "../../functions/chooseLang"

const links = [
  { link: "/", pl: "O mnie", en: "About me" },
  { link: "/projekty", pl: "Projekty", en: "Projects" },
  { link: "/kontakt", pl: "Kontakt", en: "Contact" },
]

const Navigation = ({ lang }) => {
  const [navBackgrounVisible, setNavBackgroundVisible] = useState(false)
  const onLangClick = e => {
    lang.setLang(e.target.lang)
  }

  const onScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    setNavBackgroundVisible(scrollTop > 100)
  }

  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <Nav backgroundVisible={navBackgrounVisible}>
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
    </Nav>
  )
}

export default Navigation
