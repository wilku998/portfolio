import styled from "styled-components"
import { Link } from "gatsby"

export default Navigation => styled(Navigation)`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  line-height: 1;
  font-size: 1.4rem;
  ${({ theme }) => `
    padding: 2rem ${theme.verticalPadding};
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
    height: .5px;
    width: 100%;
    transition: all 0.2s ease-in;
    ${({ theme }) => `
       background-color: ${theme.colorGrey6};
    `}
  }
  
  &:hover:after {
    transform: translateY(-50%) translateX(0);
  }
`
