import styled from "styled-components"

export default styled.h1`
  font-size: 3rem;
  font-weight: 400;
  position: relative;
  text-transform: uppercase;
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: .5rem;
    width: 5rem;
    height: 2px;
    border-radius: 10%;
    ${({ theme }) => `
       background-color: ${theme.colorGrey5};
    `}
  }
`
