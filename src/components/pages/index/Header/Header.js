import React from "react"
import style, { Title, SubTitle, MainTitle, HeaderImage, ImageCredit } from "./headerStyles"
import Image from "../../../abstracts/Image"

const Header = ({ className, smoothScroll }) => {
  return (
    <header className={className}>
      <Title>
        <MainTitle>Bartosz Wilk</MainTitle>
        <SubTitle>Junior frontend developer</SubTitle>
      </Title>
      <HeaderImage>
        <Image smoothScroll={smoothScroll} src="/images/header.jpg" />
        <ImageCredit>Sasha Lebedeva Unsplash</ImageCredit>
      </HeaderImage>
    </header>
  )
}

export default style(Header)
