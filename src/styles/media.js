import { css } from "styled-components"

const sizes = {
  big: 71.25, //1140
  medium: 62.5, //1000
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