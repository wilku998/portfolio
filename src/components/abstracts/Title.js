import styled from "styled-components";

export default styled.h1`
  font-size: 14rem;
  font-weight: 300;
  margin-bottom: 2rem;
  ${({ theme }) => `
    color: ${theme.colorGrey5};
  `}
`;