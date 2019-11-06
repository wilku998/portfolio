import styled, { keyframes } from "styled-components"

export default Header => styled(Header)`
  width: 100%;
  min-height: 50rem;
  display: flex;
  align-items: center;
  padding: 0 var(--vertical-padding);
  position: relative;

  ${({ theme }) => `
    height: calc(100vh - ${theme.navigationHeight});
  `}

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 35%;
    ${({ theme }) => `
      background-color: rgb(${theme.colorGreyGreen});
    `}
  }
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
