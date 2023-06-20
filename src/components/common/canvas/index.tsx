"use client"

import { Canvas } from "@react-three/fiber"
import type { ComponentProps } from "react"

import { domTunnel, threeTunnel } from "~/components/common/tunnel"
import { clx } from "~/utils/clx"

import { PrimaryScene } from "./primary-scene"

type CanvasProps = Omit<ComponentProps<typeof Canvas>, "children">

export const AppCanvas = ({ className, ...props }: CanvasProps) => {
  return (
    <>
      <domTunnel.Out />
      <Canvas
        className={clx(className, "!fixed !inset-0 pointer-events-none z-10")}
        {...props}
      >
        <PrimaryScene>
          <threeTunnel.Out />
        </PrimaryScene>
      </Canvas>
    </>
  )
}
