import styled from "styled-components"
import { centerAbsolute } from "../../../../styles/mixins"

export default Header => styled(Header)`
  height: 100vh;
  position: relative;
  font-family: "Playfair Display", serif;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${({ theme }) => `
    background: ${theme.colorGrey2};
  `}
`

export const TitleContainer = styled.h1`
  will-change: transform, opacity;
  transition: all .4s;
  z-index: 5;
  text-align: center;
  line-height: 1;
  mix-blend-mode: difference;
  ${({ theme }) => `
    color: ${theme.colorGrey1};
  `}
`

export const Title = styled.span`
  letter-spacing: 2rem;
  font-size: 14rem;
  &:not(:last-of-type) {
    margin-right: 2rem;
  }
`
export const SubTitle = styled.div`
  font-size: 2.2rem;
`

export const Portfolio = styled.span`
  z-index: 5;
  text-transform: lowercase;
  position: absolute;
  bottom: -2.5rem;
  left: 0;
  font-size: 1.4rem;
`


export const HeaderImage = styled.div`
  ${centerAbsolute}
  width: 55rem;
  height: 55rem;
`

export const Image = styled.img`
  position: absolute;
  top: -20px;
  left: -20px;
  height: calc(100% + 40px);
  width: calc(100% + 40px);
  transition: all .4s;
`
