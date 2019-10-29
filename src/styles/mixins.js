import { css } from "styled-components"

export const centerAbsolute = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const fullSizeAbsolute = css`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
`;

export const afterWhiteBlock = css`
  & > * {
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
`;