import React, { useRef, useLayoutEffect, useState, createContext } from "react"
import styled, { ThemeProvider } from "styled-components"
import theme from "../styles/theme"
import Navigation from "../components/Navigation/Navigation"
import GlobalStyleComponent from "../styles/GlobalStyleComponent"
import Footer from "../components/Footer/Footer"
import { SmoothScroll } from "../smoothScroll/SmoothScroll"

const Container = styled.div`
  position: relative;
  z-index: 10;
  ${({ theme }) => `
    background: ${theme.colorGrey1}
  `}
`

const Scrollable = styled.div`
  will-change: transform;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const SmoothScrollContext = createContext()

export default ({ children }) => {
  const [smoothScroll, setSmoothScroll] = useState()
  const body = useRef()
  const scrollable = useRef()

  useLayoutEffect(() => {
    setSmoothScroll(new SmoothScroll(body.current, scrollable.current))
  }, [])

  return (
    <SmoothScrollContext.Provider value={smoothScroll}>
      <div ref={body}>
        <ThemeProvider theme={theme}>
          <GlobalStyleComponent />
          <Navigation />
          <Scrollable ref={scrollable}>
            <Container>{children}</Container>
          </Scrollable>
          <Footer />
        </ThemeProvider>
      </div>
    </SmoothScrollContext.Provider>
  )
}
