import React from "react"
import styled, { ThemeProvider } from "styled-components"
import theme from "../styles/theme"
import Navigation from "../components/Navigation/Navigation"
import GlobalStyleComponent from "../styles/GlobalStyleComponent"
import Footer from "../components/Footer/Footer"

const Container = styled.div`
  position: relative;
  z-index: 10;
  padding-bottom: 20rem;
  ${({ theme }) => `
    background-color: ${theme.colorGrey1};
  `}
`

/*
  content > footer
  jezeli nawigacja jest pod footerem widac background footer
  jezeli jest nad na footerze widac background nawigacji
*/

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyleComponent />
    <Navigation />
    <Container>{children}</Container>
    <Footer />
  </ThemeProvider>
)
