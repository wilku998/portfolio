import styled from "styled-components";

export default styled.h2`
  position: absolute;
  line-height: 1;
  z-index: 20;
  bottom: 4rem;
  right: 2rem;
  transform-origin: bottom right;
  transform: rotate(270deg) translateX(100%);
  font-size: 10rem;
  ${({ theme }) => `
    color: ${theme.colorGrey3}
  `}
`
