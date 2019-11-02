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
import chooseLang from "../../../../functions/chooseLang"

const Header = ({ className, smoothScroll, lang }) => {
  const imageContainerRef = useRef()
  const imageRef = useRef()

  useLayoutEffect(() => {
    const image = imageRef.current
    const imageContainer = imageContainerRef.current
    if (image) {
      let _x, _y = 0;

      const setImageCenterPos = () => {
        const { left, top, width, height } = image.getBoundingClientRect()
        _x = left + Math.floor(width / 2)
        _y = top + Math.floor(height / 2)
      }

      setImageCenterPos();

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
      window.addEventListener("resize", setImageCenterPos)
      return () => {
        imageContainer.removeEventListener("mouseenter", onMouseEnter)
        imageContainer.removeEventListener("mouseleave", onMouseLeave)
        imageContainer.removeEventListener("mousemove", onMouseMove)
        window.removeEventListener("resize", setImageCenterPos)
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
          <BioTitle>
            {chooseLang({ pl: "Poznaj mnie", en: "About me" }, lang)}
          </BioTitle>
          <ShortBio>
            {chooseLang(
              {
                pl: `Tworzę strony oraz aplikacje internetowe korzystając z najnowszych technologii.`,
                en: "I create websites and web applications using the newest technologies.",
              },
              lang
            )}
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
            src="/images/header-compressed.jpg"
          />
        </HeaderImage>
      </HeaderImageContainer>
      <RotatedTitle>webfolio</RotatedTitle>
    </header>
  )
}

export default style(Header)
