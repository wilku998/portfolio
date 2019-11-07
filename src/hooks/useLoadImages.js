import { useEffect, useState } from "react"

export default (images, isLoading) => {
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    isLoading.setIsLoading(true)
    let loadedImages = 0
    images.forEach(imgUrl => {
      let img = new Image()
      img.src = imgUrl
      img.onload = () => {
        loadedImages++
        if (loadedImages === images.length) {
          isLoading.setIsLoading(false)
          setImagesLoaded(true)
        }
      }
    })
  }, [])

  return imagesLoaded
}
