import styled from "styled-components"
import GhostButton from "../../../abstracts/GhostButton"

export default Form => styled(Form)`
  display: flex;
  flex-direction: column;
  flex: 0 1 100rem;
  clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  & > span {
    font-weight: 600;
    padding: 0.3rem 0;
    text-transform: uppercase;
    ${({ theme }) => `
        color: ${theme.colorGrey4};
    `}
  }
`

export const Input = styled.input`
  padding: 0.75rem 1rem;
  font-size: 1.6rem !important;
  background: none;
  border-left: none;
  border-right: none;
  ${({ theme }) => `
        border-top: 1px solid ${theme.colorGrey3_4};
        border-bottom: 1px solid ${theme.colorGrey3_4};
    `}
`

export const Button = styled(GhostButton)`
  align-self: start;
  margin-top: 2rem;
`

export const Info = styled.span`
  margin-top: 2rem;
`
