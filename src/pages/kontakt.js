import React, { useLayoutEffect } from "react"
import styled from "styled-components"
import Form from "../components/pages/kontakt/Form/Form"
import { Context } from "../layouts"
import useScrollReset from "../hooks/useScrollReset"

const Main = styled.main`
  min-height: 100vh;
  padding: 10rem var(--vertical-padding);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  ${({ theme }) => `
    background-color: ${theme.colorGrey1};
  `}
  
  & > * {
    z-index: 10;
  }
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20%;
    height: 70%;
    ${({ theme }) => `
      background-color: rgb(${theme.colorGreyGreen});
    `}
  }
`

const Contact = ({ smoothScroll, lang }) => {
  useScrollReset(smoothScroll)

  useLayoutEffect(() => {
    smoothScroll.setSize()
  }, [])

  return (
    <Main>
      <Form lang={lang} />
    </Main>
  )
}

export default () => (
  <Context.Consumer>
    {({ smoothScroll, lang }) =>
      smoothScroll && <Contact smoothScroll={smoothScroll} lang={lang} />
    }
  </Context.Consumer>
)
