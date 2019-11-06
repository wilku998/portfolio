import React, { useRef, useLayoutEffect } from "react"
import { Link } from "gatsby"
import style, {
  Paragraph,
  AboutMeTitle,
  Content,
  RotatedTitle,
  AboutMeLinkButton,
} from "./aboutMeStyles"
import chooseLang from "../../../../functions/chooseLang"

const AboutMe = ({ className, smoothScroll, article, lang }) => {
  const rotatedTitle = useRef()

  useLayoutEffect(() => {
    smoothScroll.addItem({
      el: rotatedTitle.current,
      maxValue: 200,
      ease: 0.1,
      setTransform: val =>
        `rotate(270deg) translateY(100%) translateX(0) translateX(${val}px)`,
    })
  }, [])

  return (
    <section className={className}>
      <Content>
        <AboutMeTitle>
          <span>
            {chooseLang({ pl: "Poznaj mnie", en: "Get to know me" }, lang)}
          </span>
        </AboutMeTitle>
        <Paragraph>{article.paragraph}</Paragraph>
        <AboutMeLinkButton as={Link} to="/projekty">
          <span>
            {chooseLang({ pl: "Zobacz projekty", en: "See projects" }, lang)}
          </span>
        </AboutMeLinkButton>
      </Content>
      <RotatedTitle ref={rotatedTitle}>webfolio 2019</RotatedTitle>
    </section>
  )
}

export default style(AboutMe)
