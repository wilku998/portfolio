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
  min-height: 100vh;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.02);
  ${({ theme }) => `
    border-bottom: 1px solid ${theme.colorGrey3};
  `}
`

const Scrollable = styled.div`
  z-index: 10;
  ${({ isTouchDevice }) =>
    isTouchDevice
      ? `
      position: relative;
      `
      : `
      will-change: transform;
      backface-visibility: hidden;
      -webkit-font-smoothing: subpixel-antialiased;
      position: fixed;
      left: 0;
      width: 100%;
      height: 100%;
  `}

  & > * {
    position: relative;
    z-index: 10;
  }
`

const Body = styled.div`
  min-height: 100vh;
`

export const Context = createContext()

export default ({ children }) => {
  const [smoothScroll, setSmoothScroll] = useState()
  const [isTouchDevice, setIsTouchDevice] = useState(true)
  const [lang, setLang] = useState("pl")
  const body = useRef()
  const scrollable = useRef()
  const langObj = { setLang, lang }

  useLayoutEffect(() => {
    const isTouchDevice_ = !!(
      navigator.maxTouchPoints || "ontouchstart" in document.documentElement
    )
    setIsTouchDevice(isTouchDevice_)
    setSmoothScroll(
      new SmoothScroll(body.current, scrollable.current, isTouchDevice_)
    )
  }, [])

  return (
    <Context.Provider value={{ smoothScroll, lang: langObj }}>
      <Body ref={body}>
        <ThemeProvider theme={{ ...theme, media }}>
          <GlobalStyleComponent />
          <Navigation lang={langObj} />
          <Scrollable isTouchDevice={isTouchDevice} ref={scrollable}>
            {smoothScroll && <Container>{children}</Container>}
          </Scrollable>
          {smoothScroll && <Footer lang={langObj} />}
        </ThemeProvider>
      </Body>
    </Context.Provider>
  )
}
