import React, { useLayoutEffect } from "react"
import style, { Portfolio, HeaderImage, Subtitle, TitleContainer, Title } from "./headerStyles"

const Header = ({ className, smoothScroll }) => {

  useLayoutEffect(() => {
    if(smoothScroll){
      smoothScroll.blockScroll();
      setTimeout(() => {
        smoothScroll.unblockScroll();
      }, 4000)
    }
  }, [smoothScroll]);

  return (
    <header className={className}>
      <HeaderImage>
        <Portfolio>2019 Portfolio</Portfolio>
      </HeaderImage>
      <TitleContainer>
        <Title>Bartosz Wilk</Title>
        <Subtitle>Junior front-end developer</Subtitle>
      </TitleContainer>
    </header>
  )
}

export default style(Header)
