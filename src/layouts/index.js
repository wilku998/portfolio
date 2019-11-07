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
  will-change: transform;
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
  position: fixed;
  z-index: 10;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 var(--body-padding);
  & > * {
    position: relative;
    z-index: 10;
  }
`

const Body = styled.div`
  min-height: 100vh;
`;

export const Context = createContext()

export default ({ children }) => {
  const [smoothScroll, setSmoothScroll] = useState()
  const [isLoading, setIsLoading] = useState(false)

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
  const loadingObj = { isLoading, setIsLoading }
  return (
    <Context.Provider
      value={{ smoothScroll, lang: langObj, isLoading: loadingObj }}
    >
      <Body ref={body}>
        <ThemeProvider theme={{ ...theme, media }}>
          {isLoading && <Loader />}
          <GlobalStyleComponent />
          <Navigation lang={langObj} />
          <Scrollable ref={scrollable}>
            <Container>{children}</Container>
          </Scrollable>
          <Footer lang={langObj} ref={footer} />
        </ThemeProvider>
      </Body>
    </Context.Provider>
  )
}
