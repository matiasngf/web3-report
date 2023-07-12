"use client"

import { useMemo } from "react"

// Proyectos que transicionaron a web3 vs nativos
const nativeProjects = 80
const transitioned = 100 - 80

const TransitionedBlock = () => (
  <div className="rotate-45 aspect-square bg-blue-600 scale-95" />
)

const NativeBlock = () => <div className="aspect-square bg-blue-900" />

export const NativeProjects = () => {
  const n = useMemo(() => {
    return Array.from({ length: nativeProjects }, (_, i) => i)
  }, [])

  const t = useMemo(() => {
    return Array.from({ length: transitioned }, (_, i) => i)
  }, [])

  return (
    <div className="relative">
      <div className="grid grid-cols-10 grid-rows-10 gap-3 -rotate-90 md:gap-6">
        {t.map((_, i) => (
          <TransitionedBlock key={i} />
        ))}
        {n.map((_, i) => (
          <NativeBlock key={i} />
        ))}
      </div>
    </div>
  )
}
