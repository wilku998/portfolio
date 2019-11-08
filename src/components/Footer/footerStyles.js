import styled from "styled-components"

export default Footer => styled(Footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 5rem var(--vertical-padding) 2rem var(--vertical-padding);
  font-size: 1.4rem;
  max-height: 90vh;

  ${({ theme }) => `
    height: ${theme.footerHeight};
    background: ${theme.colorGrey1};
  `}

  ${({ theme }) => theme.media.medium`
    flex-direction: column;
  `}

  &:after{
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 30%;
    height: 100%;
    ${({ theme }) => `
      background: ${theme.colorGrey1_2};
    `}
  }

  & > * {
    position: relative;
    z-index: 10;
  }
`

export const PrivacyPolicy = styled.span`
  align-self: flex-end;
  margin-right: auto;
  ${({ theme }) => theme.media.medium`
    order: 5;
    margin-top: auto;
    margin-right: 0;
  `}
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: end;
  &:not(:last-child) {
    margin-right: 4rem;
  }

  ${({ theme }) => theme.media.medium`
    margin-bottom: 1.5rem;
    &:not(:last-child) {
      margin-right: 0;
    }
  `}
`
export const ItemTitle = styled.div`
  font-size: 1.2rem;
  padding-top: .3rem;
  font-weight: 600;
  margin-bottom: 0.3rem;

  ${({ theme }) => `
    border-top: 1px solid ${theme.colorGrey4};
  `}
`
