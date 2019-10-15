import styled from "styled-components"
import { centerAbsolute } from "../../../../styles/mixins"
import { ThreeStripes } from "../../../abstracts/Stripes"

export default Header => styled(Header)`
  height: 100vh;
  position: relative;
`

export const Content = styled.div`
  height: 100%;
  width: calc(100% - 30rem);
  background: url(/images/my-photo.jpg) center/cover no-repeat;
  position: relative;
  margin-bottom: 15rem;
`

export const TitleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 10rem;
  width: 30rem;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  &:after {
    z-index: 10;
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 15rem;
    ${({ theme }) => `
      background-color: ${theme.colorGrey3};
    `}
  }
`

export const Title = styled.h1`
  width: 100%;
  padding: 0 1rem;
  font-weight: 400;
  font-size: 3rem;
  text-transform: uppercase;
  ${centerAbsolute}
  ${({ theme }) => `
    color: ${theme.colorGrey1};
  `}
`

export const SubTitle = styled.div`
  font-size: 1.6rem;
`

export const HeaderStripes = styled(ThreeStripes)`
    position: absolute;
    bottom: 0;
    right: 15rem;
    transform: translate(50%, 50%);
`
