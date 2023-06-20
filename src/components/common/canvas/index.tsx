"use client"

import { Canvas } from "@react-three/fiber"
import type { ComponentProps, PropsWithChildren } from "react"

import { clx } from "~/hooks/clx"

import { PrimaryScene } from "./primary-scene"

type CanvasProps = Omit<ComponentProps<typeof Canvas>, "children">

export const AppCanvas = ({
  className,
  children,
  ...props
}: PropsWithChildren<CanvasProps>) => {
  return (
    <>
      <Canvas className={clx(className)} {...props}>
        <PrimaryScene>{children}</PrimaryScene>
      </Canvas>
    </>
  )
}
