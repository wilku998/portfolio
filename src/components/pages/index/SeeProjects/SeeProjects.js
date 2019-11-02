import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { fullSizeAbsolute } from "../../../../styles/mixins"
import chooseLang from "../../../../functions/chooseLang"

const Text = styled.span`
  font-size: 2rem;
  position: relative;
  z-index: 2;
`

const SeeProjects = ({ className, lang }) => (
  <Link to="/projekty" className={className}>
    <Text>{chooseLang({ pl: "Zobacz projekty", en: "See projects" }, lang)}</Text>
  </Link>
)

export default styled(SeeProjects)`
  height: 20rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
