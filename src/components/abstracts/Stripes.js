import styled from "styled-components"
import React from "react"

export const Stripe = styled.span`
  position: absolute;
  width: .8rem;
  height: 7rem;
  ${({ theme }) => `
    border: 1px solid ${theme.colorGrey4};
  `}
`

export const ThreeStripes = ({ className }) => (
  <div style={{ height: "10rem", width: "4rem" }} className={className}>
    <Stripe style={{ top: 0, left: 0 }} />
    <Stripe style={{ top: "1.5rem", left: "1.6rem" }} />
    <Stripe style={{ top: "3rem", left: "3.2rem" }} />
  </div>
)
