import styled from "styled-components"
import GhostButton from "../../../abstracts/GhostButton"

export default Form => styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 1 80rem;
  position: relative;
  z-index: 100 !important;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  & > span {
    font-weight: 600;
    padding: 0.5rem 0;
    text-transform: uppercase;
    ${({ theme }) => `
        color: ${theme.colorGrey4_5};
    `}
  }
`

export const Input = styled.input`
  padding: .5rem 1rem;
  font-size: 1.2rem !important;
  border-left: none;
  border-right: none;
  background: none !important;
  ${({ theme }) => `
        border-top: 1px solid ${theme.colorGrey3_4};
        border-bottom: 1px solid ${theme.colorGrey3_4};
    `}
`

export const Button = styled(GhostButton)`
  align-self: start;
  margin-top: 2rem;
  font-size: 1.4rem;
  background: rgba(255, 255, 255, .5);
`

export const Info = styled.span`
  margin-top: 2rem;
`
