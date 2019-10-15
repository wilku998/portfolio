import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "../styles/theme"
import Navigation from "../components/Navigation/Navigation"
import GlobalStyleComponent from "../styles/GlobalStyleComponent"

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyleComponent />
      <Navigation />
      {children}
  </ThemeProvider>
)
