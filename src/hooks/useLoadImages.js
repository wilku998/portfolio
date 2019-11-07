import { useEffect, useState } from "react"

export default (images) => {
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    let loadedImages = 0
    images.forEach(imgUrl => {
      let img = new Image()
      img.src = imgUrl
      img.onload = () => {
        loadedImages++
        if (loadedImages === images.length) {
          setImagesLoaded(true)
        }
      }
    })
  }, [])

  return imagesLoaded
}
