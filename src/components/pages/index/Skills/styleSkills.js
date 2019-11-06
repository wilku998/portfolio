import styled from "styled-components"

export default Skills => styled(Skills)`
  margin-top: 30rem;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  ${({ theme }) => `
    background-color: ${theme.colorGrey2};
  `}
`

export const Content = styled.div`
  position: relative;
  z-index: 10;
  height: 100%;
  max-width: 110rem;
  background: rgb(246, 246, 246, 0.5);

  display: flex;
  padding: 10rem var(--vertical-padding);
  ${({ theme }) => theme.media.big_2`
    max-width: 100%;
    width: 100%;
  `}
  ${({ theme }) => theme.media.small`
    flex-direction: column;
  `}
`

export const Item = styled.div`
  flex: 1 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:not(:last-child) {
    margin: 0 var(--vertical-padding) 0 0;
    ${({ theme }) => theme.media.small`
      margin: 0 0 5rem 0;
    `}
  }
`

export const Desc = styled.p`
  margin: 2rem 0 4rem 0;
  /* font-size: 1.4rem; */
`

export const ListItem = styled.li`
  position: relative;
  &:not(:first-child) {
    margin-top: 2rem;
  }

  &:after {
    content: "";
    position: absolute;
    top: -0.5rem;
    left: 0;
    width: 1.5rem;
    height: 1px;
    ${({ theme }) => `
      background-color: ${theme.colorGrey5}
    `}
  }
`
