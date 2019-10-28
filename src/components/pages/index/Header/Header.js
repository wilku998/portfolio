import React, { useLayoutEffect } from "react"
import style, {
  TopBlock,
  Content,
  ShortBio,
  Title,
  BioTitle,
  SubTitle,
  RotatedTitle,
} from "./headerStyles"

const Header = ({ className, smoothScroll }) => {
  useLayoutEffect(() => {
    if (smoothScroll) {
      // smoothScroll.blockScroll();
      // setTimeout(() => {
      //   smoothScroll.unblockScroll();
      // }, 4000)
    }
  }, [smoothScroll])

  return (
    <header className={className}>
      <TopBlock />
      <Content>
        <Title>
          Bartosz Wilk
          <SubTitle>Junior frontend developer</SubTitle>
        </Title>
        <div>
          <BioTitle>O mnie</BioTitle>
          <ShortBio>
            Tworzę strony oraz aplikacje internetowe korzystając z najnowszych
            technologii.
          </ShortBio>
        </div>
      </Content>
      <RotatedTitle>Portfolio</RotatedTitle>
    </header>
  )
}

export default style(Header)
