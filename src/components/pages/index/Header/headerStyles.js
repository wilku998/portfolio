import styled, { keyframes } from "styled-components"
import { centerAbsolute } from "../../../../styles/mixins"

const showContent = keyframes`
  from {
    left: 0;
  }
  to {
    left: 40rem;
  }
`

export default Header => styled(Header)`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.025);
    ${({ theme }) => `
      background: ${theme.colorGrey1}
    `}
    animation: ${showContent} 1s 1s both ease-out;
  }
`



export const TopBlock = styled.div`
  flex: 0 0 20%;
  z-index: 10;
  width: 100%;
  height: 25%;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: calc(100% + 2rem);
    left: 0;
    width: 100%;
    height: 2px;
  }

  ${({ theme }) => `
    border-bottom: 2px ${theme.colorGrey2} solid;
    &:after{
      background-color: ${theme.colorGrey2};
    }
  `}
`


export const Content = styled.div`
  padding: 10rem 5rem 4rem 5rem;
  width: 40rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ShortBio = styled.p``

export const BioTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  ${({ theme }) => `
    color: ${theme.colorGrey5};
  `}
`

const showTitle = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-5rem);
  }

  100%{
    opacity: 1;
    transform: translateY(0);
  }
`

export const Title = styled.h1`
  font-size: 4rem;
  line-height: 1;
  animation: ${showTitle} 1s 2s both;
`

export const SubTitle = styled.div`
  font-size: 1.4rem;
`

