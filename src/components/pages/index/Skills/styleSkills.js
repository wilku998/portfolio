import styled from "styled-components"
import Title from "../../../abstracts/Title"

export default Skills => styled(Skills)`
  display: flex;
  flex-direction: column;
  margin-top: 20rem;
`

export const SkillsTitle = styled.h2`
  text-align: center;
  font-size: 5rem;
  margin-bottom: 5rem;
  &:after {
    left: initial;
    right: 0.5rem;
  }
`

export const Item = styled.section`
  height: 55rem;
  display: flex;
`

export const FrontendImage = styled.div`
  width: 60rem;
`

export const BackendImage = styled.div`
  flex: 1;
`

export const ItemContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 10;
`

export const FrontedContent = styled(ItemContent)`
  padding: 0 20rem 0 5rem;
  margin-left: -10rem;
  flex: 1;
`

export const BackendContent = styled(ItemContent)`
  padding: 0 5rem;
  margin-right: -10rem;
  flex: 0 0 70rem;
  align-items: flex-end;
  text-align: end;
`

export const ItemTitle = styled(Title)`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1rem;
  padding: 0 1rem;
  ${({theme}) => `
    color: ${theme.colorGrey5};
  `}

  &:after {
    left: 0;
    background-color: white;
  }
`

export const FrontendTitle = styled(ItemTitle)`
  align-self: flex-start;
`

export const BackendTitle = styled(ItemTitle)`
  align-self: flex-end;
`

export const SkillsList = styled.ul`
  display: flex;
  font-size: 1.8rem;
  flex-wrap: wrap;
  justify-content: center;
  ${({ theme }) => `
    padding: 8rem ${theme.verticalPadding} 6rem ${theme.verticalPadding};
  `}
  & > li {
    margin-bottom: 2rem;
    &:not(:last-child) {
      margin-right: 5rem;
    }
  }
`
