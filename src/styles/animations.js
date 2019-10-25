import { keyframes } from "styled-components"

export const vanish = keyframes`
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`

export const appear = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`
