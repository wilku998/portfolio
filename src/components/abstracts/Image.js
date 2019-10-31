import React, { useRef, useLayoutEffect } from "react"
import styled from "styled-components"

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`

export const ImageContent = styled.div`
  position: absolute;
  will-change: transform;
  ${({ src, translate }) => `
    ${
      translate === "translateX"
        ? `
          top: -100px;
          left: -100px;
          height: calc(100% + 200px);
          width: calc(100% + 200px);
        ` : `
          left: 0;
          top: -50px;
          height: calc(100% + 100px);
          width: 100%;`
    }
    background: url("${src}") center/cover no-repeat;
  `}
`

export default ({ src, smoothScroll, translate }) => {
  const imageRef = useRef()

  useLayoutEffect(() => {
    if (smoothScroll) {
      smoothScroll.addItem(imageRef.current, translate)
    }
  }, [smoothScroll])

  return (
    <ImageContainer ref={imageRef}>
      <ImageContent translate={translate} src={src} />
    </ImageContainer>
  )
}
