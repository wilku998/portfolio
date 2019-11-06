import React from "react"
import style, { Item, PrivacyPolicy, ItemTitle } from "./footerStyles"
import chooseLang from "../../functions/chooseLang"

const Footer = React.forwardRef(({ className, lang }, ref) => (
  <footer ref={ref} className={className}>
    <PrivacyPolicy>
      {chooseLang(
        {
          pl: "2019 Wszystkie prawa zastrzeżone",
          en: "2019 All rights reserved",
        },
        lang
      )}
    </PrivacyPolicy>
    <Item>
      <ItemTitle>email</ItemTitle>
      <span>wilkbartosz98@wp.pl</span>
    </Item>
    <Item>
      <ItemTitle>github</ItemTitle>
      <span>https://github.com/wilku998</span>
    </Item>
    <Item>
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
    </Item>
  </footer>
))

export default style(Footer)
