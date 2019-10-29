import styled from "styled-components"
import { afterWhiteBlock } from "../../styles/mixins";

export default styled.h1`
  font-weight: 400;
  position: relative;
  ${afterWhiteBlock}
  ${({ theme }) => `
    color: ${theme.colorGrey5};
  `}


`
