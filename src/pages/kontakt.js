import React, { useLayoutEffect } from "react"
import styled from "styled-components"
import Form from "../components/pages/kontakt/Form/Form"
import { SmoothScrollContext } from "../layouts"
import useScrollReset from "../hooks/useScrollReset"
import RotatedTitle from "../components/abstracts/RotatedTitle"
import { fullSizeAbsolute } from "../styles/mixins"

const Main = styled.main`
  height: 100vh;
  padding: 10rem;
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

const Contact = ({ smoothScroll }) => {
  useScrollReset(smoothScroll)

  useLayoutEffect(() => {
    smoothScroll.setSize()
  }, [])

  return (
    <Main>
      <Form />
      <RotatedTitle>Kontakt</RotatedTitle>
      <Circle />
    </Main>
  )
}

export default () => (
  <SmoothScrollContext.Consumer>
    {smoothScroll => smoothScroll && <Contact smoothScroll={smoothScroll} />}
  </SmoothScrollContext.Consumer>
)
