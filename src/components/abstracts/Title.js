import styled from "styled-components"

export default styled.h1`
  font-size: 7rem;
  font-weight: 300;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: calc(100% - 1rem);
    left: 1rem;
    width: 10rem;
    height: 3px;
    border-radius: 10%;
    ${({ theme }) => `
       background-color: ${theme.colorGrey5};
    `}
  }
`
