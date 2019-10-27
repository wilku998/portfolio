import React from "react"
import style, {
  PhotosCredit,
  PrivacyPolicy,
  Email,
  Github,
  Telephone,
  Contact,
  ContactTitle,
  ContactLink,
  ItemTitle,
} from "./footerStyles"

const Footer = ({ className }) => (
  <footer className={className}>
    <Email>
      <ItemTitle>email</ItemTitle>
      <span>wilkbartosz98@wp.pl</span>
    </Email>
    <Github>
      <ItemTitle>github</ItemTitle>
      <span>https://github.com/wilku998</span>
    </Github>
    <Telephone>
      <ItemTitle>telefon</ItemTitle>
      <span>+48 570 706 596</span>
    </Telephone>
    <PhotosCredit>
      Wszystkie fotografie, poza zdjęciami projektów
      zostały pobrane ze strony unsplah
    </PhotosCredit>
    <PrivacyPolicy>2019 wszystkie prawa zastrzeżone</PrivacyPolicy>
    <Contact>
      <ContactTitle>Zainteresowany współpracą?</ContactTitle>
      <ContactLink to="/kontakt">Formularz kontaktowy</ContactLink>
    </Contact>
  </footer>
);

export default style(Footer)
