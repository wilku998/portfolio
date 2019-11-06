import React, { useRef, useLayoutEffect } from "react"
import styled from "styled-components"
import { fullSizeAbsolute } from "../../styles/mixins"

export const ImageContainer = styled.div`
  ${fullSizeAbsolute}
  overflow: hidden;
`

export const ImageContent = styled.div`
  position: absolute;
  will-change: transform;
  ${({ src, theme }) => `
      left: 0;
      top: -50px;
      height: calc(100% + 100px);
      width: 100%;
      background: url("${src}") center/cover no-repeat;
  `}
`

export default ({ src, smoothScroll }) => {
  const imageRef = useRef()

  useLayoutEffect(() => {
    if (smoothScroll) {
      smoothScroll.addItem({
        el: imageRef.current,
        maxValue: 50,
        setTransform: val => `translate3d(0,${val}px,0)`,
      })
    }
  }, [smoothScroll])

  return (
    <ImageContainer ref={imageRef}>
      <ImageContent src={src} />
    </ImageContainer>
  )
}
