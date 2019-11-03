import styled, { css } from "styled-components"
import Title from "../../../abstracts/Title"

export default Skills => styled(Skills)`
  margin-top: 20rem;
  display: flex;
  flex-direction: column;
`

const Item = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: repeat(3, max-content) 1fr;
  grid-gap: 0 var(--vertical-padding-small);
  &:not(:last-child) {
    margin-bottom: 20rem;
  }
  ${({theme}) => theme.media.medium`
    grid-template-columns: repeat(2, 1fr);
  `}
`

export const OddItem = styled(Item)`
  padding-left: var(--vertical-padding);
`

export const EvenItem = styled(Item)`
  text-align: right;
  padding-right: var(--vertical-padding);
`

export const SkillsTitle = styled.h2`
  grid-column: 1/3;
  text-align: center;
  font-size: 5rem;
  margin-bottom: 5rem;
  padding: 0 var(--vertical-padding);
`

const oddItem = css`
  grid-column: 3/4;
  ${({theme}) => theme.media.medium`
    grid-column: 2/3;
  `}
`

const evenItem = css`
  grid-column: 1/2;
`

export const OddItemImage = styled.div`
  grid-row: 1/4;
  grid-column: 2/4;
  ${({theme}) => theme.media.medium`
    grid-column: 2/3;
  `}
`

export const EvenItemImage = styled.div`
  grid-row: 1/4;
  grid-column: 1/3;
  ${({theme}) => theme.media.medium`
    grid-column: 1/2;
  `}
`

export const ItemContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 10;
`

const ItemTitle = styled(Title)`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1rem;
  padding: 0 1rem;
  ${({ theme }) => `
    color: ${theme.colorGrey5};
  `}

  &:after {
    left: 0;
    background-color: white;
  }
`
export const OddItemTitle = styled(ItemTitle)`
  justify-self: start;
  ${evenItem}
`

export const EvenItemTitle = styled(ItemTitle)`
  justify-self: end;
  ${oddItem}
  grid-row: 1/2;
`

const ItemList = styled.ul`
  font-size: 1.4rem;
  & > li {
    padding: 0.5rem 0;
    &:not(:last-child) {
      ${({ theme }) => `
        border-bottom: 1px solid ${theme.colorGrey3}
      `}
    }
  }
`

export const OddItemList = styled(ItemList)`
  ${evenItem}
`

export const EvenItemList = styled(ItemList)`
  ${oddItem}
  grid-row: 3/4;
`

export const Desc = styled.p`
  margin-bottom: 6rem;
`

export const OddItemDesc = styled(Desc)`
  ${evenItem}
`

export const EvenItemDesc = styled(Desc)`
  ${oddItem}
  grid-row: 2/3;
`
