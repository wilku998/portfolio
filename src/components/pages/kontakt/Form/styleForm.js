import styled from "styled-components"
import GhostButton from "../../../abstracts/GhostButton"

export default Form => styled(Form)`
  display: flex;
  flex-direction: column;
  flex: 0 1 100rem;
  position: relative;
  z-index: 100 !important;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  & > span {
    font-weight: 600;
    padding: 0.5rem 0;
    text-transform: uppercase;
    ${({ theme }) => `
        color: ${theme.colorGrey4};
    `}
  }
`

export const Input = styled.input`
  padding: 1rem;
  font-size: 1.4rem !important;
  border-left: none;
  border-right: none;
  &, &:valid, &:invalid, &:-webkit-autofill {
    background: none !important;
  }
  ${({ theme }) => `
        border-top: 1px solid ${theme.colorGrey3_4};
        border-bottom: 1px solid ${theme.colorGrey3_4};
    `}
`

export const Button = styled(GhostButton)`
  align-self: start;
  margin-top: 2rem;
  font-size: 1.4rem;
`

export const Info = styled.span`
  margin-top: 2rem;
`
