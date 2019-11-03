import styled, { keyframes } from "styled-components"
import { centerAbsolute, fullSizeAbsolute } from "../../../../styles/mixins"

export default Header => styled(Header)`
  width: 100%;
  position: relative;
  display: grid;
  padding: 0 5rem 2rem 5rem;
  height: 100vh;
  min-height: 60rem;
  grid-template-columns: 30rem 1fr 30rem;
  grid-template-rows: 1fr 30rem 1fr;
`
export const HeaderImageContainer = styled.div`
  height: 100%;
  width: 30rem;
  grid-row: 2/3;
  grid-column: 2/3;
  align-self: center;
  justify-self: center;
  perspective: 15px;
`

export const HeaderImage = styled.div`
  height: 100%;
  width: 100%;
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
  grid-column: 1/2;
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 4rem;
  line-height: 1;
  animation: ${showTitle} 1s 2s both;
`

export const SubTitle = styled.div`
  font-size: 1.4rem;
`

export const ShortBioContainer = styled.div`
  grid-column: 1/2;
  grid-row: 3/4;
  align-self: end;
`
