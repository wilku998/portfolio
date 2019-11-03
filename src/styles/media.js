import { css } from "styled-components"

const sizes = {
  big: 80, //1280
  medium: 53.125, //850
}

let media = {}

Object.keys(sizes).forEach(key => {
  media[key] = (...args) => css`
    @media only screen and (max-width: ${sizes[key]}em) {
      ${css(...args)}
    }
  `
})

export default media