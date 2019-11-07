import React, { useLayoutEffect } from "react"
import Header from "../components/pages/index/Header/Header"
import AboutMe from "../components/pages/index/AboutMe/AboutMe"
import Skills from "../components/pages/index/Skills/Skills"
import { Context } from "../layouts"
import useLoadImages from "../hooks/useLoadImages"
import useSkillsQuery from "../contentfulQueries/useSkillsQuery"
import useArticleQuery from "../contentfulQueries/useArticleQuery"
import Contact from "../components/pages/index/Contact/Contact"
import useScrollReset from "../hooks/useScrollReset"

const Index = ({ smoothScroll, lang, isLoading }) => {
  const skills = useSkillsQuery(lang)
  const article = useArticleQuery(lang)
  const imagesLoaded = useLoadImages(["/images/skills-background.jpg"], isLoading)

  useLayoutEffect(() => {
    if (imagesLoaded) {
      smoothScroll.setSize()
    }
  }, [imagesLoaded, lang.lang])

  useScrollReset(smoothScroll)

  return (
    <main>
      <Header smoothScroll={smoothScroll} />
      <AboutMe smoothScroll={smoothScroll} article={article} lang={lang} />
      <Skills smoothScroll={smoothScroll} skills={skills} lang={lang} />
      <Contact lang={lang} />
    </main>
  )
}

export default () => (
  <Context.Consumer>
    {({ smoothScroll, lang, isLoading }) =>
      smoothScroll && (
        <Index smoothScroll={smoothScroll} lang={lang} isLoading={isLoading} />
      )
    }
  </Context.Consumer>
)
