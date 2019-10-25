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
  top: -100px;
  left: -100px;
  height: calc(100% + 200px);
  width: calc(100% + 200px);
  will-change: transform;
  ${({src}) => `
    background: url("${src}") center/cover no-repeat;
  `}
`

export default ({ src, smoothScroll }) => {
  const imageRef = useRef()

  useLayoutEffect(() => {
    if (smoothScroll) {
      smoothScroll.addItem(imageRef.current)
    }
  }, [smoothScroll])

  return (
    <ImageContainer ref={imageRef}>
      <ImageContent src={src} />
    </ImageContainer>
  )
}
