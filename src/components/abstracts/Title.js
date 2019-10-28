import styled from "styled-components"

export default styled.h1`
  font-weight: 400;
  position: relative;

  ${({ theme }) => `
    color: ${theme.colorGrey5};
  `}

  & > span {
    position: relative;
    z-index: 10;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 2rem;
    height: 100%;
    width: 100%;
    ${({ theme }) => `
      background-color: ${theme.colorGrey1};
    `}
  }
`
