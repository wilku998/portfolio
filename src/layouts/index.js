import React, { useRef, useLayoutEffect, useState, createContext } from "react"
import styled, { ThemeProvider } from "styled-components"
import theme from "../styles/theme"
import Navigation from "../components/Navigation/Navigation"
import GlobalStyleComponent from "../styles/GlobalStyleComponent"
import Footer from "../components/Footer/Footer"
import { SmoothScroll } from "../smoothScroll/SmoothScroll"
import media from "../styles/media"
import Loader from "../components/Loader/Loader"

const Container = styled.div`
  position: relative;
  z-index: 10;
  min-height: 100vh;
`

const Scrollable = styled.div`
  z-index: 10;
  padding: 0 var(--body-padding);

  ${({ isTouchDevice }) =>
    isTouchDevice
      ? `
      position: relative;
      ` : `
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
  const [isLoading, setIsLoading] = useState(true)
  const [lang, setLang] = useState("pl")
  const body = useRef()
  const scrollable = useRef()
  const langObj = { setLang, lang }
  const loadingObj = { isLoading, setIsLoading }
  const isTouchDevice = !!(navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);

  useLayoutEffect(() => {
    setSmoothScroll(
      new SmoothScroll(body.current, scrollable.current, isTouchDevice)
    )
  }, [])

  return (
    <Context.Provider
      value={{ smoothScroll, lang: langObj, isLoading: loadingObj }}
    >
      <Body ref={body}>
        <ThemeProvider theme={{ ...theme, media }}>
          {isLoading && <Loader />}
          <GlobalStyleComponent />
          {smoothScroll && <Navigation lang={langObj} />}
          <Scrollable isTouchDevice={isTouchDevice} ref={scrollable}>
            {smoothScroll && <Container>{children}</Container>}
          </Scrollable>
          {smoothScroll && <Footer lang={langObj} />}
        </ThemeProvider>
      </Body>
    </Context.Provider>
  )
}
