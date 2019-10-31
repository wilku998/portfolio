import React, { useRef, useLayoutEffect } from "react"
import style, {
  Content,
  ShortBio,
  Title,
  BioTitle,
  SubTitle,
  HeaderImageContainer,
  ImageTitle,
  HeaderImage,
} from "./headerStyles"
import Image from "../../../abstracts/Image"
import RotatedTitle from "../../../abstracts/RotatedTitle"

const Header = ({ className, smoothScroll }) => {
  const imageContainerRef = useRef()
  const imageRef = useRef()

  useLayoutEffect(() => {
    const image = imageRef.current
    const imageContainer = imageContainerRef.current
    if (image) {
      const {left, top, width, height} = image.getBoundingClientRect();
      const _x = left + Math.floor(width / 2)
      const _y = top + Math.floor(height / 2)

      let counter = 0
      const updateRate = 10
      const isTimeToUpdate = () => {
        return counter++ % updateRate === 0
      }

      const layout = (clientX, clientY) => {
        const x = clientX - _x
        const y = (clientY - _y) * -1

        image.style.transform = `rotateX(${(y / image.offsetHeight / 2).toFixed(
          2
        )}deg) rotateY(${(x / image.offsetWidth / 2).toFixed(2)}deg)`
      }

      const update = ({ clientX, clientY }) => {
        requestAnimationFrame(() => layout(clientX, clientY))
      }

      const onMouseEnter = event => {
        update(event)
      }
      const onMouseLeave = () => {
        image.style.transform = "rotateX(0deg) rotateY(0deg)"
      }
      const onMouseMove = event => {
        if (isTimeToUpdate()) {
          update(event)
        }
      }

      imageContainer.addEventListener("mouseenter", onMouseEnter)
      imageContainer.addEventListener("mouseleave", onMouseLeave)
      imageContainer.addEventListener("mousemove", onMouseMove)
      return () => {
        imageContainer.removeEventListener("mouseenter", onMouseEnter)
        imageContainer.removeEventListener("mouseleave", onMouseLeave)
        imageContainer.removeEventListener("mousemove", onMouseMove)
      }
    }
  }, [])

  return (
    <header className={className}>
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
      <HeaderImageContainer ref={imageContainerRef}>
        {/*Photo by Mike Ko on Unsplash*/}
        <HeaderImage ref={imageRef}>
          <ImageTitle>Portfolio 2019</ImageTitle>
          <Image
            translate="translateX"
            smoothScroll={smoothScroll}
            src="/images/header.jpg"
          />
        </HeaderImage>
      </HeaderImageContainer>
      <RotatedTitle>webfolio</RotatedTitle>
    </header>
  )
}

export default style(Header)
