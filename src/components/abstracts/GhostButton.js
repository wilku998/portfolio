import styled from "styled-components"

export default styled.button`
  background: none;
  padding: 0.3rem 2rem;
  ${({ theme }) => `
        border: 1px solid ${theme.colorGrey4};
    `}
`
