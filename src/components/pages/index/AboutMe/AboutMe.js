import React from "react"
import style, {
  Paragraph,
  AboutMeTitle,
  ImageContainer,
  Content,
  SecondImageContainer,
  FirstImageContainer,
} from "./aboutMeStyles"
import Image from "../../../abstracts/Image"
import chooseLang from "../../../../functions/chooseLang"

const AboutMe = ({ className, smoothScroll, article, lang }) => (
  <section className={className}>
    <ImageContainer>
      <FirstImageContainer>
        <Image smoothScroll={smoothScroll} src={article.image} />
      </FirstImageContainer>
      <SecondImageContainer>
        <Image smoothScroll={smoothScroll} src={article.image} />
      </SecondImageContainer>
    </ImageContainer>
    <Content>
      <AboutMeTitle>
        <span>
          {chooseLang({ pl: "Poznaj mnie", en: "Get to know me" }, lang)}
        </span>
      </AboutMeTitle>
      <Paragraph>{article.paragraph}</Paragraph>
    </Content>
  </section>
)

export default style(AboutMe)
