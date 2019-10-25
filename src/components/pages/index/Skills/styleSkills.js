import styled from "styled-components"
import Title from "../../../abstracts/Title"
import { fullSizeAbsolute } from "../../../../styles/mixins"
export default Skills => styled(Skills)`
  display: flex;
  flex-direction: column;
  margin-top: 20rem;
`

export const SkillsTitle = styled(Title)`
  margin: 0 10rem 2rem 0;
  margin-bottom: 5rem;
  text-align: right;
  &:after {
    left: initial;
    right: .5rem;
  }
`

export const Item = styled.section`
  height: 80vh;
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

export const ItemTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  margin-bottom: 3rem;

  & > span {
    position: relative;
    z-index: 10;
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(100% + 2rem);
    height: 120%;
    transform: translate(-50%, -50%);
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
  padding: 8rem 10rem 6rem 10rem;
  font-size: 1.8rem;
  flex-wrap: wrap;
  justify-content: center;
  & > li {
    margin-bottom: 2rem;
    &:not(:last-child) {
      margin-right: 5rem;
    }
  }
`
