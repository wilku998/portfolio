import styled, { keyframes } from "styled-components"
import { centerAbsolute } from "../../../../styles/mixins"

export default Header => styled(Header)`
  height: 100vh;
  width: 100%;
  position: relative;
`

const showHeaderImage = keyframes`
  from {
    transform: translateX(-100%)
  }

  to {
    transform: translateX(0);
  }
`;

export const HeaderImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 25%;
  background: url("/images/header-compressed.jpg") center/cover no-repeat;
  animation: ${showHeaderImage} 1s 3s both;
`

const showPortfolio = keyframes`
  0% {
    opacity: 0;
    transform: translate(-10rem, -50%);
  }

  100%{
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`

export const Portfolio = styled.div`
  font-size: 1.4rem;
  ${centerAbsolute}
  padding: .5rem 2rem .5rem 1rem;
  clip-path: polygon(0 0, 90% 0, 100% 100%, 0 100%);
  background-color: rgba(255, 255, 255, 0.5);
  animation: ${showPortfolio} 1s 4s both;
`

const showTitle = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, -5rem);
  }

  100%{
    opacity: 1;
    transform: translate(0, -50%);
  }
`

export const TitleContainer = styled.h1`
  position: absolute;
  height: 3.5rem;
  top: 50%;
  width: 100%;
  line-height: 1;
  /* animation: name duration timing-function delay iteration-count direction fill-mode; */
  animation: ${showTitle} 1s ease-out 1.5s both;
`

const showSubtitle = keyframes`
  from {
    right: 50%;
    transform: translateX(50%);
  }
  to {
    right: 10rem;
    transform: translateX(0);
  }
`

export const Subtitle = styled.span`
  width: fit-content;
  font-size: 1.2rem;
  position: absolute;
  top: 100%;
  animation: ${showSubtitle} 1s ease 3s both;
`

export const Title = styled.span`
  width: fit-content;
  position: absolute;
  font-size: 3.5rem;
  animation: ${showSubtitle} .8s ease 3s both;
`;