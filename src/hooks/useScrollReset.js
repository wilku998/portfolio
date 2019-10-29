import { useEffect } from "react"

export default smoothScroll => {
  useEffect(() => {
    smoothScroll.resetRequest()
    return () => (smoothScroll.DOM.footer.style.opacity = 0)
  }, [])
}
