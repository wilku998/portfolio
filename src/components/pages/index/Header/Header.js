import React from "react"
import style, { Title, SubTitle, MainTitle } from "./headerStyles"

const Header = ({ className }) => {
  return (
    <header className={className}>
      <Title>
        <MainTitle>Bartosz Wilk</MainTitle>
        <SubTitle>Junior frontend developer</SubTitle>
      </Title>
    </header>
  )
}

export default style(Header)
