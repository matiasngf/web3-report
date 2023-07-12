"use client"

import { PerspectiveCamera } from "@react-three/drei"

import { useCanvasSize } from "~/hooks/use-canvas-size"
import { useScrollStore } from "~/hooks/use-scroll"

export const SceneCamera = () => {
  const { width, height } = useCanvasSize()
  const yScroll = useScrollStore((s) => s.yScroll)
  const distance = 1000 // Specify the distance from the camera to the scene

  // Calculate the field of view (fov) based on the distance and desired height
  const fov = (Math.atan(height / (2 * distance)) * 360) / Math.PI

  return (
    <PerspectiveCamera
      near={0.1}
      far={distance * 2}
      position={[width / 2, -yScroll - height / 2, distance]}
      makeDefault
      onUpdate={(c) => c.updateProjectionMatrix()}
      fov={fov}
    />
  )
}
