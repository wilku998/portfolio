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
import chooseLang from "../../functions/chooseLang"

const Footer = React.forwardRef(({ className, lang }, ref) => (
  <footer ref={ref} className={className}>
    <Email>
      <ItemTitle>email</ItemTitle>
      <span>wilkbartosz98@wp.pl</span>
    </Email>
    <Github>
      <ItemTitle>github</ItemTitle>
      <span>https://github.com/wilku998</span>
    </Github>
    <Telephone>
      <ItemTitle>
        {chooseLang(
          {
            pl: "Telefon",
            en: "Telephone",
          },
          lang
        )}
      </ItemTitle>
      <span>+48 570 706 596</span>
    </Telephone>
    <Contact>
      <ContactTitle>
        {chooseLang(
          {
            pl: "Zainteresowany współpracą?",
            en: "Are you interested in teamwork?",
          },
          lang
        )}
      </ContactTitle>
      <ContactLink to="/kontakt">
        {chooseLang(
          {
            pl: "Formularz kontaktowy",
            en: "Contact form",
          },
          lang
        )}
      </ContactLink>
    </Contact>
    <PrivacyPolicy>
      {chooseLang(
        {
          pl: "2019 Wszystkie prawa zastrzeżone",
          en: "2019 All rights reserved",
        },
        lang
      )}
    </PrivacyPolicy>
    <PhotosCredit>
      {chooseLang(
        {
          pl:
            "Wszystkie fotografie, poza zdjęciami projektów oraz tym przedstawiającym mnie zostały pobrane ze strony unsplash.com",
          en:
            "All photos except projects images and photo of myself are downloaded from site unsplash.com",
        },
        lang
      )}
    </PhotosCredit>
  </footer>
))

export default style(Footer)
