import styled from "styled-components"
import { fullSizeAbsolute } from "../../../../styles/mixins"
import GhostButton from "../../../abstracts/GhostButton"

export default AboutMe => styled(AboutMe)`
  position: relative;
`

//content
export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10rem var(--vertical-padding);
  ${({ theme }) => `
    background-color: ${theme.colorGrey1};
  `}
`

export const Paragraph = styled.p`
  line-height: 1.6;
  margin: 1rem 0 3rem 0;
`

export const AboutMeLinkButton = styled(GhostButton)`
  font-size: 1.4rem;
  & > span {
    position: relative;
    z-index: 10;
  }

  &:after {
    z-index: 1;
  }
`

export const AboutMeTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`
