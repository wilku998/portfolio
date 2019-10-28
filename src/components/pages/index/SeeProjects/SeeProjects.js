import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { fullSizeAbsolute } from "../../../../styles/mixins"

const Text = styled.span`
  font-size: 2rem;
  position: relative;
  z-index: 2;
`

const SeeProjects = ({ className }) => (
  <Link to="/projects" className={className}>
    <Text>Zobacz projekty</Text>
  </Link>
)

export default styled(SeeProjects)`
  height: 20rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
/* 
  &:after {
    content: "";
    ${fullSizeAbsolute}
    opacity: 0;
    transition: all 1s;
    ${({theme}) => `
    background-color: ${theme.colorGrey1};
  `}
  }

  &:hover:after {
    opacity: 1;
  } */
`
