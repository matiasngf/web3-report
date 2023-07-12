"use client"

import { Float, RoundedBox } from "@react-three/drei"
import type { MeshProps } from "@react-three/fiber"
import { type MutableRefObject, useMemo } from "react"
import { Euler, MeshPhysicalMaterial } from "three"

import { useClientRect } from "~/hooks/use-client-rect"

const Box1Rotation = new Euler(0.5, 0.5, 0.5)
const Box2Rotation = new Euler(0.1, -0.3, 0.7)
const Box3Rotation = new Euler(-0.2, 0.4, 0.6)

interface BlockProps extends MeshProps {
  blockSize: number
}

const Block = ({ blockSize, ...props }: BlockProps) => {
  return (
    <Float floatIntensity={0.3} rotationIntensity={0.3}>
      <RoundedBox
        {...(props as any)}
        args={[blockSize, blockSize, blockSize]}
        radius={blockSize * 0.02}
        smoothness={4}
      />
    </Float>
  )
}

export const HeroBlocks = ({
  containerRef,
}: {
  containerRef: MutableRefObject<HTMLDivElement | null>
}) => {
  const heroRect = useClientRect(containerRef.current)
  const middleX = heroRect.left + heroRect.width / 2
  const middleY = heroRect.absoluteTop + heroRect.height / 2

  const boxSize = useMemo(() => {
    let size = Math.max(heroRect.width * 0.1, 100)
    size = Math.min(size, 150)
    return size
  }, [heroRect.width])

  const boxMaterial = useMemo(() => {
    return new MeshPhysicalMaterial({
      color: "#52a8ff",
      roughness: 0,
      metalness: 0.5,
      reflectivity: 1,
    })
  }, [])

  return (
    <group position={[middleX, -middleY, 0]}>
      <Block
        rotation={Box1Rotation}
        position={[heroRect.width * 0.2, heroRect.height * -0.1, 300]}
        blockSize={boxSize}
        material={boxMaterial}
      />
      <Block
        rotation={Box2Rotation}
        position={[heroRect.width * 0.15, heroRect.height * 0.2, -200]}
        blockSize={boxSize}
        material={boxMaterial}
      />
      <Block
        rotation={Box3Rotation}
        position={[heroRect.width * 0.25, heroRect.height * 0.1, 0]}
        blockSize={boxSize}
        material={boxMaterial}
      />
    </group>
  )
}
