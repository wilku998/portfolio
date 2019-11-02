import React, { useLayoutEffect } from "react"
import Header from "../components/pages/index/Header/Header"
import AboutMe from "../components/pages/index/AboutMe/AboutMe"
import Skills from "../components/pages/index/Skills/Skills"
import SeeProjects from "../components/pages/index/SeeProjects/SeeProjects"
import { Context } from "../layouts"
import useLoadImages from "../hooks/useLoadImages"
import useScrollReset from "../hooks/useScrollReset"
import useSkillsQuery from "../contentfulQueries/useSkillsQuery"
import useArticleQuery from "../contentfulQueries/useArticleQuery"

const Index = ({ smoothScroll, lang }) => {
  const skills = useSkillsQuery(lang)
  const article = useArticleQuery(lang)

  const imagesLoaded = useLoadImages([
    ...skills.map(e => e.image),
    article.image,
    "/images/header-compressed.jpg",
  ])

  useLayoutEffect(() => {
    if (imagesLoaded) {
      smoothScroll.setSize()
    }
  }, [imagesLoaded, lang.lang])

  useScrollReset(smoothScroll)

  return (
    <main>
      {imagesLoaded && (
        <>
          <Header smoothScroll={smoothScroll} lang={lang} />
          <AboutMe smoothScroll={smoothScroll} article={article} lang={lang} />
          <Skills smoothScroll={smoothScroll} skills={skills} lang={lang} />
          <SeeProjects lang={lang} />
        </>
      )}
    </main>
  )
}

export default () => (
  <Context.Consumer>
    {({ smoothScroll, lang }) =>
      smoothScroll && <Index smoothScroll={smoothScroll} lang={lang} />
    }
  </Context.Consumer>
)
