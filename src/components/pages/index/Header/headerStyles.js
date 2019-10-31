import styled, { keyframes } from "styled-components"
import { centerAbsolute, fullSizeAbsolute } from "../../../../styles/mixins"

export default Header => styled(Header)`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
`
export const HeaderImageContainer = styled.div`
  ${centerAbsolute}
  perspective: 20px;
`

export const HeaderImage = styled.div`
  height: 30rem;
  width: 30rem;
  flex: 1;
  border-radius: 0.3rem;
  overflow: hidden;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
  transition: all 0.5s;
  will-change: transform;
`

export const ImageTitle = styled.h2`
  ${centerAbsolute}
  z-index: 10;
  font-size: 1.6rem;
  ${({ theme }) => `
    color: ${theme.colorGrey2};
  `}
`
export const Content = styled.div`
  padding: 0 5rem 4rem 5rem;
  flex: 0 1 40rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background: rgba(0, 0, 0, .25); */
  & > * {
    position: relative;
    z-index: 10;
  }
`

export const ShortBio = styled.p`
  font-size: 1.4rem;
`

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
  margin-top: 20vw;
  line-height: 1;
  animation: ${showTitle} 1s 2s both;
`

export const SubTitle = styled.div`
  font-size: 1.4rem;
`
