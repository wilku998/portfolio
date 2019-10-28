import styled from "styled-components"
import { Link } from "gatsby"

export default Footer => styled(Footer)`
  position: fixed;
  bottom: 0;
  left: 0%;
  width: 100%;
  font-size: 1.4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr) 2fr;
  grid-gap: 2rem 6rem;
  grid-template-rows: repeat(2, max-content) 1fr max-content;
  ${({ theme }) => `
    background-color: ${theme.colorGrey3};
    min-height: ${theme.footerHeight};
    padding: 10rem ${theme.verticalPadding} 3rem ${theme.verticalPadding};
  `}
`

export const PrivacyPolicy = styled.span`
  grid-row: 4/5;
  grid-column: 2/3;
`

export const PhotosCredit = styled.span`
  grid-row: 4/5;
  grid-column: 1/2;
`

export const Item = styled.div`
  padding-top: 1rem;
  ${({ theme }) => `
    border-top: 1px solid ${theme.colorGrey4};
  `}
`
export const ItemTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
`

export const Email = styled(Item)`
  grid-row: 1/2;
  grid-column: 1/2;
`

export const Github = styled(Item)`
  grid-row: 2/3;
  grid-column: 1/2;
`

export const Telephone = styled(Item)`
  grid-row: 1/2;
  grid-column: 2/3;
`

export const Contact = styled.div`
  grid-column: 3/4;
  grid-row: 1/4;
  align-self: center;
  justify-self: center;
  text-align: center;
`

export const ContactTitle = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 1rem;
  ${({ theme }) => `
      color: ${theme.colorGrey5};
    `}
`

export const ContactLink = styled(Link)`
  padding: 0.6rem 4rem;
  font-size: 1.4rem;
  ${({ theme }) => `
        border: 1px solid ${theme.colorGrey5};
    `}
`
