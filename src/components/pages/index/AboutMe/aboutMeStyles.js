import styled from "styled-components"
import Title from "../../../abstracts/Title"

export default AboutMe => styled(AboutMe)`
  margin-top: 20rem;
  position: relative;
  ${({theme}) => `
    padding: 0 ${theme.verticalPadding};
  `}

`

export const Paragraph = styled.p`
  width: 100%;
  line-height: 1.6;
  max-width: 100rem;
`

export const AboutMeTitle = styled(Title)`
  margin-bottom: 2rem;
`