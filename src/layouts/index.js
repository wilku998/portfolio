import React, { useRef, useLayoutEffect, useState, createContext } from "react"
import styled, { ThemeProvider } from "styled-components"
import theme from "../styles/theme"
import Navigation from "../components/Navigation/Navigation"
import GlobalStyleComponent from "../styles/GlobalStyleComponent"
import Footer from "../components/Footer/Footer"
import { SmoothScroll } from "../smoothScroll/SmoothScroll"
import media from "../styles/media"

const Container = styled.div`
  position: relative;
  z-index: 10;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.05);
`

const Scrollable = styled.div`
  will-change: transform;
  position: fixed;
  z-index: 10;
  left: 0;
  width: 100%;
  height: 100%;

  & > * {
    position: relative;
    z-index: 10;
  }
`

export const Context = createContext()

export default ({ children }) => {
  const [smoothScroll, setSmoothScroll] = useState()
  const [lang, setLang] = useState("pl")
  const body = useRef()
  const scrollable = useRef()
  const footer = useRef()
  useLayoutEffect(() => {
    setSmoothScroll(
      new SmoothScroll(body.current, scrollable.current, footer.current)
    )
  }, [])

  const langObj = { setLang, lang }
  return (
    <Context.Provider value={{ smoothScroll, lang: langObj }}>
      <div ref={body}>
        <ThemeProvider theme={{ ...theme, media }}>
          <GlobalStyleComponent />
          <Navigation lang={langObj} />
          <Scrollable ref={scrollable}>
            <Container>{children}</Container>
          </Scrollable>
          <Footer lang={langObj} ref={footer} />
        </ThemeProvider>
      </div>
    </Context.Provider>
  )
}
