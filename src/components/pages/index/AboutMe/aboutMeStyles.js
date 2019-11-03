import styled from "styled-components"
import Title from "../../../abstracts/Title";

export default AboutMe => styled(AboutMe)`
  margin-top: 20rem;
  display: flex;
  justify-content: space-between;
  display: flex;
  padding: 0 var(--vertical-padding);
  ${({theme}) => theme.media.medium`
    flex-direction: column;
  `}
`

export const Content = styled.div`
  flex: 0 1 50%;
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
  margin-right: var(--vertical-padding);
  height: 70rem;
  display: flex;
  justify-content: space-between;
  ${({theme}) => theme.media.medium`
    justify-content: center;
    order: 2;
    margin-right: 0;
    margin-top: 5rem;
  `}
`

const Image = styled.div`
  width: calc(50% - (var(--vertical-padding-small) / 2));
  height: calc(100% - 10rem);
  max-width: 30rem;

  ${({theme}) => theme.media.medium`
    width: initial;
    flex: 1;
    &:not(:last-child){
      margin-right: var(--vertical-padding);
    }
  `}
`
export const FirstImageContainer = styled(Image)`
  margin-top: 10rem;
`

export const SecondImageContainer = styled(Image)`
  margin-top: 0;
`
