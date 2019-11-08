import styled from "styled-components"
import { afterWhiteBlock, fullSizeAbsolute } from "../../styles/mixins"

export const Nav = styled.nav`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1;
  font-size: 1.3rem;
  padding: 0 var(--vertical-padding-small);
  box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.01);

  ${({ theme }) => `
    height: ${theme.navigationHeight};
    background-color: ${theme.colorGrey1};
    border-bottom: 1px solid ${theme.colorGrey3};
  `}

  &:after{
    content: "";
    transition: all .4s;
    ${fullSizeAbsolute}
    opacity: .75;
    ${({ theme }) => `
      background-color: ${theme.colorGrey1};
    `}
    ${({ backgroundVisible }) => backgroundVisible ? `
      // transform: translateY(0);
    ` : `
      // transform: translateY(-100%);
    `}
  }

  & > * {
    position: relative;
    z-index: 10;
  }
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
      background-color: ${theme.colorBlue1};
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
      background-color: ${theme.colorBlue1};
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
