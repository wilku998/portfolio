import { Link } from "gatsby"
import styled from "styled-components"
import { fullSizeAbsolute } from "../../../../styles/mixins"
import Title from "../../../abstracts/Title"

export default AboutMe => styled(AboutMe)`
  position: relative;
  margin-bottom: 30rem;
  ${({ theme }) => theme.media.small`
    margin-bottom: 60rem;
  `}
`

//content
export const Content = styled.div`
  position: relative;
  width: 65%;
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
  max-width: 40rem;
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

export const AboutMeLink = styled(Link)`
  font-size: 1.4rem;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    height: 1px;
    width: 100%;
  }

  ${({ theme }) => `
    color: ${theme.colorGrey4} !important;

    &:after{
      background-color: ${theme.colorGrey3_4}
    }
  `}
`

export const AbouteMeImage = styled.div`
  position: absolute;
  bottom: -10rem;
  left: -17%;
  height: 100%;
  width: 34%;
  max-height: 50rem;
  ${({ theme }) => theme.media.big`
    left: -20%;
    width: 40%;
    max-height: 60rem;
  `}
  ${({ theme }) => theme.media.medium`
    left: -30vw;
    width: 35vw;
  `}
  ${({ theme }) => theme.media.small`
    bottom: initial;
    left: 0;
    top: calc(100% - 50px);
    width: 100%;
    height: 70rem;
    z-index: 1;
  `}
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
  ${({ theme }) => theme.media.medium`
    display: none;
  `}
`
