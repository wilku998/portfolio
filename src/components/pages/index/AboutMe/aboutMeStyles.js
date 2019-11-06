import styled from "styled-components"
import { fullSizeAbsolute } from "../../../../styles/mixins"
import Title from "../../../abstracts/Title"
import GhostButton from "../../../abstracts/GhostButton"

export default AboutMe => styled(AboutMe)`
  position: relative;
  margin-bottom: 20rem;
`

//content
export const Content = styled.div`
  position: relative;
  width: 70%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: end;
  padding: 15rem var(--vertical-padding) 15rem 10rem;
  ${({ theme }) => `
    background-color: ${theme.colorGrey1};
  `}
  ${({ theme }) => theme.media.small`
    padding: 15rem var(--vertical-padding);
    width: 100%;
    &:after{
      content: "";
      z-index: 5;
      ${fullSizeAbsolute}
      background-color: ${theme.colorGrey1};
    }
    & > * {
      position: relative;
      z-index: 10;
    }
  `}
`

export const Paragraph = styled.p`
  line-height: 1.6;
  max-width: 80%;
  margin: 3rem 0;
`

export const AboutMeTitle = styled(Title)`
  ${({ theme }) => `
    &:after{
      left: initial;
      right: 2rem;
      background-color: ${theme.colorGrey2};
    }
  `}
`

export const AboutMeLinkButton = styled(GhostButton)`
  font-size: 1.4rem;
  & > span {
    position: relative;
    z-index: 10;
  }

  &:after{
    z-index: 1;
  }
`


export const RotatedTitle = styled.h1`
  position: absolute;
  bottom: 0;
  left: var(--vertical-padding-small);
  font-size: 6rem;
  transform-origin: left bottom;
  transform: rotate(270deg) translateX(-50%) translateY(100%);
  ${({ theme }) => `
    color: ${theme.colorGrey5};
  `}
  ${({ theme }) => theme.media.small`
    display: none;
  `}
`
