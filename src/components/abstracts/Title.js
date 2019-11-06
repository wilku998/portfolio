import styled from "styled-components"
import { afterWhiteBlock } from "../../styles/mixins";

export default styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.8;
  position: relative;
  ${afterWhiteBlock}
  ${({ theme }) => `
    color: ${theme.colorGrey5};
  `}
`
