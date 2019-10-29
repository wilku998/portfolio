import styled from "styled-components"
import { Link } from "gatsby"
import { afterWhiteBlock } from "../../styles/mixins"

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
    padding: 1.5rem ${theme.verticalPadding};
  `}
`

export const NavLink = styled(Link)`
  margin-left: 4rem;
  position: relative;
  overflow: hidden;
  padding: .5rem 1rem;
  font-weight: 600;
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
