import styled from "styled-components"
import GhostButton from "../../abstracts/GhostButton"
import ReactSVG from "react-svg"
import { fullSizeAbsolute, centerAbsolute } from "../../../styles/mixins"
import Title from "../../abstracts/Title"

export default Project => styled(Project)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
  padding: 0 var(--vertical-padding) 30rem var(--vertical-padding);
`

export const TitleContainer = styled.div`
  display: flex;
  padding: 0 var(--vertical-padding) 2rem var(--vertical-padding);
`

export const ProjectTitle = styled(Title)`
  font-size: 4rem;
`

export const Description = styled.div`
  padding: 2.5rem 2.5rem 0 2.5rem;
  display: grid;
  grid-gap: 2rem 4rem;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  ${({ theme }) => `
    border-top: 1px solid ${theme.colorGrey4};
  `}
`

export const DescriptionTitle = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  letter-spacing: 0.2rem;
`

export const Technologies = styled.div`
  justify-self: end;
  text-align: center;
  grid-column: 2/3;
  ${({theme}) => theme.media.medium`
    grid-column: 1/3;
    grid-row: 2/3;
    justify-self: start;
    text-align: start;
  `}
`

export const List = styled.ul`
  & > li {
    &:not(:last-child) {
      margin-bottom: 0.3rem;
    }
  }
`

export const Paragraph = styled.p`
  ${({theme}) => theme.media.medium`
    text-align: justify;
  `}
`

export const DescriptionContent = styled.div`
  ${({theme}) => theme.media.medium`
    grid-column: 1/3;
  `}
`
export const Link = styled(GhostButton)`
  font-size: 1.4rem;
  &:not(:last-child) {
    margin-right: 2rem;
  }
`

export const LinksContainer = styled.div`
  grid-column: 1/3;
  grid-row: 3/4;
`

export const Gallery = styled.div`
  margin-top: 10rem;
  position: relative;
`

export const FakeImage = styled.img`
  height: auto;
  opacity: 0;
  visibility: hidden;
`

export const Image = styled.img`
  position: absolute;
  height: auto;
  transform: scale(0.95);
  transition: all 0.2s;
  box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.05);
  &:hover {
    transform: scale(1);
  }
  &:nth-child(2) {
    width: 60%;
    top: 0;
    left: 0%;
  }
  &:nth-child(3) {
    width: 50%;
    top: 50%;
    right: 0%;
    transform: translateY(-50%) scale(0.975);
    &:hover {
      transform: translateY(-50%) scale(1);
    }
  }
  &:nth-child(4) {
    width: 50%;
    bottom: 0;
    left: 5%;
  }

  &:hover {
    z-index: 10;
  }

  ${({ theme }) => `
    border: 3px solid ${theme.colorGrey1};
  `}
`

export const MoveIcon = styled(ReactSVG)`
  height: 100%;
  padding: 0 1.5rem;
  cursor: pointer;
  ${({ theme }) => `
    fill: ${theme.colorGrey5};
  `}

  & svg {
    ${centerAbsolute}
    width: 1.5rem;
  }
`

export const MoveIconContainer = styled.div`
  position: relative;
`

export const MoveIconLeft = styled(MoveIcon)``

export const MoveIconRight = styled(MoveIcon)`
  & svg {
    transform: translate(-50%, -50%) rotate(180deg);
  }
`
