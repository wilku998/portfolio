import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { fullSizeAbsolute } from "../../../../styles/mixins"
import chooseLang from "../../../../functions/chooseLang"
import GhostButton from "../../../abstracts/GhostButton"

const Title = styled.h2`
  font-size: 4rem;
  position: relative;
  z-index: 2;
`

export const LinkButton = styled(GhostButton)`
  margin-top: 1rem;
  font-size: 1.4rem;
  padding: 0.5rem 3rem;
`

const Contact = ({ className, lang }) => (
  <div to="/projekty" className={className}>
    <Title>
      {chooseLang(
        { pl: "Stwórzmy coś razem", en: "Let's make something together" },
        lang
      )}
    </Title>
    <LinkButton as={Link} to="/kontakt">
      {chooseLang({ pl: "Formularz kontaktowy", en: "Contact form" }, lang)}
    </LinkButton>
  </div>
)

export default styled(Contact)`
  position: relative;
  z-index: 20;
  height: 40rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  ${({ theme }) => `
    background-color: ${theme.colorGrey1};
  `}
`
