import React, { useLayoutEffect, useEffect } from "react"
import Header from "../components/pages/index/Header/Header"
import AboutMe from "../components/pages/index/AboutMe/AboutMe"
import Skills from "../components/pages/index/Skills/Skills"
import SeeProjects from "../components/pages/index/SeeProjects/SeeProjects"
import { SmoothScrollContext } from "../layouts"
import useLoadImages from "../hooks/useLoadImages"
import useScrollReset from "../hooks/useScrollReset"

const Index = ({ smoothScroll }) => {
  const imagesLoaded = useLoadImages([
    "/images/my-photo.jpg",
    "/images/front-compressed.jpg",
    "/images/back-compressed.jpg",
  ])

  useLayoutEffect(() => {
    if (imagesLoaded) {
      smoothScroll.setSize()
    }
  }, [imagesLoaded])

  useScrollReset(smoothScroll);

  return (
    <main>
      {imagesLoaded && (
        <>
          <Header smoothScroll={smoothScroll} />
          <AboutMe smoothScroll={smoothScroll} />
          <Skills smoothScroll={smoothScroll} />
          <SeeProjects />
        </>
      )}
    </main>
  )
}

export default () => (
  <SmoothScrollContext.Consumer>
    {smoothScroll => smoothScroll && <Index smoothScroll={smoothScroll} />}
  </SmoothScrollContext.Consumer>
)
