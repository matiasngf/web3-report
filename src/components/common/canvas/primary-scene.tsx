"use client"

import { Environment } from "@react-three/drei"
import type { ReactNode } from "react"

import { SceneCamera } from "./scene-camera"

export const PrimaryScene = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Environment files="/background.hdr" background={false} blur={10} />
      <ambientLight color="#ffffff" intensity={0.5} />
      <SceneCamera />
      {children}
    </>
  )
}
