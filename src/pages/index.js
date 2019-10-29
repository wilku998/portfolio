import React from "react"
import Header from "../components/pages/index/Header/Header"
import AboutMe from "../components/pages/index/AboutMe/AboutMe"
import Skills from "../components/pages/index/Skills/Skills"
import SeeProjects from "../components/pages/index/SeeProjects/SeeProjects"
import { SmoothScrollContext } from "../layouts"

export default () => (
    <main>
      <SmoothScrollContext.Consumer>
        {smoothScroll => (
          <>
            <Header smoothScroll={smoothScroll} />
            <AboutMe smoothScroll={smoothScroll} />
            <Skills smoothScroll={smoothScroll} />
          </>
        )}
      </SmoothScrollContext.Consumer>
      <SeeProjects />
    </main>
)
