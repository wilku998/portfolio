import React, { useRef, useLayoutEffect } from "react"
import style, {
  Paragraph,
  AboutMeTitle,
  Content,
  AboutMeLink,
  AbouteMeImage,
  RotatedTitle,
} from "./aboutMeStyles"
import Image from "../../../abstracts/Image"
import chooseLang from "../../../../functions/chooseLang"

const AboutMe = ({ className, smoothScroll, article, lang }) => {
  const image = useRef()
  const rotatedTitle = useRef()

  useLayoutEffect(() => {
    smoothScroll.addItem({
      el: image.current,
      maxValue: 50,
      setTransform: val => `translate3d(0,${val}px,0)`,
    })
    smoothScroll.addItem({
      el: rotatedTitle.current,
      maxValue: 200,
      ease: .1,
      setTransform: val => `rotate(270deg) translateY(100%) translateX(0) translateX(${val}px)`,
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
        <AboutMeLink to="/projekty">
          {chooseLang({ pl: "Zobacz projekty", en: "See projects" }, lang)}
        </AboutMeLink>
        <AbouteMeImage ref={image}>
          <Image smoothScroll={smoothScroll} src={article.image} />
        </AbouteMeImage>
      </Content>
      <RotatedTitle ref={rotatedTitle}>webfolio 2019</RotatedTitle>
    </section>
  )
}

export default style(AboutMe)
