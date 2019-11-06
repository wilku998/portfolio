import styled from "styled-components"
import { afterWhiteBlock } from "../../styles/mixins"

export default Navigation => styled(Navigation)`
  position: fixed;
  z-index: 20;
  top: 0;
  left: var(--body-padding);
  width: calc(100% - (2 * var(--body-padding)));
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1;
  font-size: 1.3rem;
  padding: 0 var(--vertical-padding-small);
  ${({ theme }) => `
    height: ${theme.navigationHeight};
    background: ${theme.colorGrey1};
  `}
`

export const Side = styled.div`
  display: flex;
  align-items: center;
`

const NavItem = styled.div`
  position: relative;
  overflow: hidden;
  padding: 0.5rem 1rem;
  font-weight: 600;
  cursor: pointer;

  ${({ theme }) => `
   color: ${theme.colorGrey5};
  `}

  ${afterWhiteBlock}

  &:after {
    transform: translateX(-100%) translateX(-2.1rem);
    transition: all 0.3s ease-in;
  }

  &:hover:after {
    transform: translateX(0);
  }
`

export const NavLink = styled(NavItem)`
  &:not(:first-child) {
    margin-left: 4rem;

    ${({ theme }) => theme.media.small`
      margin-left: 1rem;
    `}
  }
  &:after {
    ${({ theme }) => `
      background-color: rgba(${theme.colorGreyGreen});
    `}
  }
`

export const NavButton = styled(NavItem)`
  text-transform: uppercase;
  &:not(:first-child) {
    margin-left: 2rem;
    ${({ theme }) => theme.media.small`
      margin-left: 1rem;
    `}
  }

  &:after {
    ${({ theme }) => `
      background-color: ${theme.colorGrey3_4};
    `}
  }
  ${({ isSelected }) =>
    isSelected
      ? `&:after{
            transform: translateX(0);
            left: 0;
        } `
      : ""}
`
