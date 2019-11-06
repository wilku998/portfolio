import styled from "styled-components"

export default styled.button`
  background: none;
  padding: 0.3rem 2rem;
  position: relative;
  ${({ theme }) => `
    border: 1px solid ${theme.colorGrey4};
  `}

  &:after{
    content: "";
    position: absolute;
    top: .3rem;
    left: .3rem;
    width: 100%;
    height: 100%;
    z-index: -1;
    ${({ theme }) => `
      border: 1px solid ${theme.colorBlue2};
    `}
  }
`
