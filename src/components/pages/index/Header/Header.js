import React, { useRef, useLayoutEffect } from "react"
import style, {
  Portfolio,
  Title,
  TitleContainer,
  SubTitle,
  HeaderImage
} from "./headerStyles"
import { ImageContent, ImageContainer } from "../../../abstracts/Image"

const Header = ({ className, smoothScroll }) => {
  const titleRef = useRef()
  const imageRef = useRef()

  const onScroll = scrollY => {
    const transform = scrollY / 10
    if (Math.abs(transform) <= 40) {
      imageRef.current.style.transform = `translateY(${transform}px)`
      titleRef.current.style.transform = `translateY(${2 * transform}px)`
    }

    if (transform <= 40) {
      titleRef.current.style.opacity = 1 - transform / 200
    } else if (transform === 0) {
      titleRef.current.style.opacity = 1
    }
  }

  useLayoutEffect(() => {
    if (smoothScroll) {
      smoothScroll.addCallback(onScroll)
    }
  }, [smoothScroll])

  return (
    <header className={className}>
      <TitleContainer ref={titleRef}>
        <Title>Bartosz</Title>
        <Title>Wilk</Title>
        <SubTitle>Junior frontend developer</SubTitle>
      </TitleContainer>
      <HeaderImage>
        <ImageContainer>
          <ImageContent
            ref={imageRef}
            src="/images/my-photo-compressed.jpg"
            smoothScroll={smoothScroll}
          />
        </ImageContainer>
        <Portfolio>2019 Portfolio</Portfolio>
      </HeaderImage>
    </header>
  )
}

export default style(Header)
