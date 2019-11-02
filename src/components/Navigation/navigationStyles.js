import styled from "styled-components"
import { Link } from "gatsby"
import { afterWhiteBlock, fullSizeAbsolute } from "../../styles/mixins"

export default Navigation => styled(Navigation)`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1;
  font-size: 1.4rem;
  ${({ theme }) => `
    padding: 1rem 5rem;
  `}

  &:after {
    z-index: -1;
    content: "";
    ${fullSizeAbsolute}
    opacity: 0.5;
    ${({ theme }) => `
      background: ${theme.colorGrey2};
      box-shadow: 0 1px 1px ${theme.colorGrey2};
    `}
  }
`

export const Side = styled.div`
  display: flex;
  align-items: center;
  &:not(:first-child) {
    margin-left: 8rem;
  }
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
  }
`

export const NavButton = styled(NavItem)`
  text-transform: uppercase;
  &:not(:first-child) {
    margin-left: 2rem;
  }

  &:after {
    ${({ theme }) => `
      background-color: #b4e1c4;
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
