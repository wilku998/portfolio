import styled from "styled-components"
import Title from "../../../abstracts/Title";

export default AboutMe => styled(AboutMe)`
  margin-top: 20rem;
  display: flex;
  justify-content: space-between;
  display: flex;
  ${({ theme }) => `
    padding: 0 ${theme.verticalPadding};
  `}
`

export const Content = styled.div`
  flex: 0 0 60rem;
`

export const Paragraph = styled.p`
  line-height: 1.6;
  text-align: justify;
`

export const AboutMeTitle = styled(Title)`
  font-size: 5rem;
  margin-bottom: 2rem;
  display: inline-block;
`

export const ImageContainer = styled.div`
  flex: 1;
  margin-right: 10rem;
  height: 70rem;
  display: flex;
  justify-content: space-between;
`

const Image = styled.div`
  width: calc(50% - 2.5rem);
  height: calc(100% - 10rem);
  max-width: 30rem;
`
export const FirstImageContainer = styled(Image)`
  margin-top: 10rem;
`

export const SecondImageContainer = styled(Image)`
  margin-top: 0;
`
