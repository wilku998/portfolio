import styled, { keyframes } from "styled-components"
import { centerAbsolute } from "../../../../styles/mixins"

export default Header => styled(Header)`
  width: 100%;
  min-height: 60rem;
  display: flex;
  align-items: center;
  padding: 0 var(--vertical-padding);
  position: relative;
  ${({ theme }) => `
    height: calc(100vh - ${theme.navigationHeight});
    background: linear-gradient(to right bottom, ${theme.colorGrey1_2}, ${theme.colorGrey2});
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
  position: relative;
  z-index: 10;
  font-size: 6rem;
  line-height: 1;
`

export const SubTitle = styled.div`
  animation: ${showTitle} 1s 0.5s both;
`

export const MainTitle = styled.div`
  animation: ${showTitle} 1s 0.75s both;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: -1rem;
    left: 0.3rem;
    width: 2rem;
    height: 3px;
    ${({ theme }) => `
      background-color: ${theme.colorGrey5};
    `}
  }
`

export const HeaderImage = styled.div`
  width: 40rem;
  height: 40rem;
  ${centerAbsolute}
  ${({ theme }) => theme.media.small`
    width: 100%;
    height: 100%;
  `}
`

export const ImageCredit = styled.span`
  transform: rotate(90deg);
  transform-origin: right bottom;
  position: absolute;
  bottom: 0.5rem;
  right: -0.5rem;
  font-size: 1rem;
  ${({ theme }) => theme.media.small`
    display: none;
  `}
`
