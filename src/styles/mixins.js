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
