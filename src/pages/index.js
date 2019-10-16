import React from "react"
import styled from 'styled-components';
import Header from "../components/pages/index/Header/Header"
import AboutMe from "../components/pages/index/AboutMe/AboutMe"
import Skills from "../components/pages/index/Skills/Skills";

const Main = styled.main`
  ${({theme}) => `
    padding: 0 calc(10rem - ${theme.navigationWidth}) 0 10rem;
  `}
`;

export default () => (
  <>
    <Header />
    <Main>
      <AboutMe />
      <Skills />
    </Main>
  </>
)
