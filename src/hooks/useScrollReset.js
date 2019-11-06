import { useLayoutEffect } from "react"

export default smoothScroll => {
  useLayoutEffect(() => {
    smoothScroll.resetRequest()
  }, [])
}
