import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useState } from "react"

export const useCanvasSize = () => {
  const { gl } = useThree()

  const [size, setSize] = useState({
    width: 1920,
    height: 1080,
  })

  const [pixelRatio, setPixelRatio] = useState(1)
  const domWidth = gl.domElement.width
  const domHeight = gl.domElement.height
  useFrame(() => {
    const newPixelRatio = gl.getPixelRatio()
    if (newPixelRatio !== pixelRatio) {
      setPixelRatio(newPixelRatio)
    }
  })

  useEffect(() => {
    const newWidth = domWidth / pixelRatio
    const newHeight = domHeight / pixelRatio

    if (newWidth !== size.width || newHeight !== size.height) {
      setSize({
        width: newWidth,
        height: newHeight,
      })
    }
  }, [domWidth, domHeight, pixelRatio, size])

  return size
}
