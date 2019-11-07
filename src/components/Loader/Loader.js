import React from "react"
import styled, { keyframes } from "styled-components"

const LoaderContainer = styled.div`
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => `
    background-color: ${theme.colorGrey2}
  `}
`
const rotate = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`

const Loader = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border-radius: 50%;
    animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    ${({ theme }) => `
        border: 6px solid ${theme.colorBlue2};
        border-color: ${theme.colorBlue2} transparent transparent transparent;
    `}
  }

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`

export default () => (
  <LoaderContainer>
    {/* <Loader>
      <div />
      <div />
      <div />
      <div />
    </Loader> */}
  </LoaderContainer>
)
