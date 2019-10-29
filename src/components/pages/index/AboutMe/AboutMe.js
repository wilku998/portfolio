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

const AboutMe = ({ className, smoothScroll }) => (
  <section className={className}>
    <ImageContainer>
      <FirstImageContainer>
        <Image smoothScroll={smoothScroll} src="/images/my-photo.jpg" />
      </FirstImageContainer>
      <SecondImageContainer>
        <Image smoothScroll={smoothScroll} src="/images/my-photo.jpg" />
      </SecondImageContainer>
    </ImageContainer>
    <Content>
      <AboutMeTitle>
        <span>Poznaj mnie</span>
      </AboutMeTitle>
      <Paragraph>
        Mam 21 lat, od półtora roku tworzę strony oraz aplikacje internetowe.
        Podstawowe języki frontendu HTML, CSS (w tym flexbox oraz css-grid) oraz
        JS są mi bardzo dobrze znane, podobnie jak zagadnienia teoretyczne
        javascriptu, czyli execution stack, scope chain i event loop. Korzystam
        również z wielu innych technologii oraz znam podstawy backendu,
        wszystkie z nich wypisałem w sekcji poniżej. Jestem w stanie zbudować
        proste strony typu landingpage oraz złożone aplikacje z własnym api.
        Zapraszam do zapoznania się z moimi projektami, które znajdują się w
        sekcji projekty, a zainteresowanych współpracą do wypełnienia formularza
        kontaktowego.
      </Paragraph>
    </Content>
  </section>
)

export default style(AboutMe)
