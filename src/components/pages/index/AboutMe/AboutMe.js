import React from "react"
import style, {
  Paragraph,
  Block,
  AboutMeThreeStripes,
  AboutMeStripe,
} from "./aboutMeStyles"
import Title from '../../../abstracts/Title';

const AboutMe = ({ className }) => (
  <section className={className}>
    <Title>Poznaj&nbsp;mnie</Title>
    <Paragraph>
      Mam 21 lat, od półtora roku tworzę strony oraz aplikacje internetowe.
      Podstawowe języki frontendu HTML, CSS (w tym flexbox oraz css-grid) oraz
      JS są mi bardzo dobrze znane, podobnie jak zagadnienia teoretyczne
      javascriptu, czyli execution stack, scope chain i event loop. Korzystam
      również z wielu innych technologii oraz znam podstawy backendu, wszystkie
      z nich wypisałem w sekcji poniżej. Jestem w stanie zbudować proste strony
      typu landingpage oraz złożone aplikacje z własnym api. Zapraszam do
      zapoznania się z moimi projektami, które znajdują się w sekcji projekty, a
      zainteresowanych współpracą do wypełnienia formularza kontaktowego.
    </Paragraph>
    <Block>
      <AboutMeStripe />
    </Block>
    <AboutMeThreeStripes />
  </section>
)

export default style(AboutMe)
