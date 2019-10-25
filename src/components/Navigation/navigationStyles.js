import styled from "styled-components"
import { Link } from "gatsby"

export default Navigation => styled(Navigation)`
  position: fixed;
  z-index: 20;
  top: 0;
  right: 0;
  width: 100vh;
  display: flex;
  align-items: center;
  transform-origin: 100% 0;
  transform: rotate(90deg) translateX(100%);
  line-height: 1;
  font-size: 1.2rem;
  ${({ theme }) => `
    height: ${theme.navigationWidth};
  `}
`

export const NavLink = styled(Link)`
  margin-left: 4rem;
  position: relative;
  overflow: hidden;
  padding: 0 1rem;
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%) translateX(-100%);
    height: 1px;
    width: 100%;
    transition: all 0.2s;
    ${({ theme }) => `
       background-color: ${theme.colorGrey5};
    `}
  }
  
  &:hover:after {
    transform: translateY(-50%) translateX(0);
  }
`
