import React, { useLayoutEffect } from "react"
import { Link } from "gatsby"
import style, {
  Paragraph,
  Content,
  AboutMeLinkButton,
  AboutMeTitle,
} from "./aboutMeStyles"
import chooseLang from "../../../../functions/chooseLang"

const AboutMe = ({ className, article, lang }) => {

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
    </section>
  )
}

export default style(AboutMe)
