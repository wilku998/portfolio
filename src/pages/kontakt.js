import React, { useLayoutEffect } from "react"
import styled from "styled-components"
import Form from "../components/pages/kontakt/Form/Form"
import { Context } from "../layouts"
import useScrollReset from "../hooks/useScrollReset"
import RotatedTitle from "../components/abstracts/RotatedTitle"
import { fullSizeAbsolute } from "../styles/mixins"
import chooseLang from "../functions/chooseLang"

const Main = styled.main`
  min-height: 100vh;
  padding: 10rem var(--vertical-padding);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
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
      background-color: ${theme.colorGrey3};
    `}
  }
`

const Circle = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  clip-path: circle(50% at 50% 50%);
  width: 40rem;
  height: 40rem;
  z-index: 5;
  transform: translate(40%, 40%);
  ${({ theme }) => `
    background-color: ${theme.colorGrey3};
  `}
  ${({theme}) => theme.media.big`
    width: 35rem;
    height: 35rem;
  `}
  &:after {
    content: "";
    ${fullSizeAbsolute}
    transform: scale(0.99);
    clip-path: circle(50% at 50% 50%);
    ${({ theme }) => `
      background-color: ${theme.colorGrey2};
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
      <RotatedTitle>
        {chooseLang({ pl: "kontakt", en: "contact" }, lang)}
      </RotatedTitle>
      <Circle />
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
