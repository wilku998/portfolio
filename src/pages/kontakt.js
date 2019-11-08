import React, { useLayoutEffect } from "react"
import styled from "styled-components"
import ReactSVG from "react-svg"
import Form from "../components/pages/kontakt/Form/Form"
import { Context } from "../layouts"
import useScrollReset from "../hooks/useScrollReset"
import { centerAbsolute } from "../styles/mixins"

const Main = styled.main`
  min-height: 100vh;
  padding: 10rem var(--vertical-padding);
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  ${({ theme }) => `
    // background: linear-gradient(to right bottom, ${theme.colorGrey2}, ${theme.colorGrey3});
  `}
`

const Icon = styled(ReactSVG)`
  flex: 1;
  position: relative;
  margin-left: var(--vertical-padding);
  & svg {
    width: 60%;
    ${centerAbsolute}
    ${({ theme }) => `
      fill: ${theme.colorGrey1_2};
    `};
  }

  ${({ theme }) => theme.media.big_2`
    display: none;
  `}
`

const Contact = ({ smoothScroll, lang }) => {
  useScrollReset(smoothScroll)

  useLayoutEffect(() => {
    smoothScroll.setSize()
  }, [])

  return (
    <Main>
      <Form lang={lang} />
      <Icon src="/svgs/paper-plane.svg" />
    </Main>
  )
}

export default () => (
  <Context.Consumer>
    {({ smoothScroll, lang }) => (
      <Contact smoothScroll={smoothScroll} lang={lang} />
    )}
  </Context.Consumer>
)
