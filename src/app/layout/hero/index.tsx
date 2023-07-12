"use client"

import Link from "next/link"
import { useRef } from "react"

import { threeTunnel } from "~/components/common/tunnel"

import { HeroBlocks } from "./hero-blocks"

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-6xl space-y-10 px-8">
        <threeTunnel.In>
          <HeroBlocks containerRef={containerRef} />
        </threeTunnel.In>
        <h1 className="text-3xl leading-relaxed font-thin lg:text-4xl">
          Relevamiento de proyectos Web3 en LATAM.
        </h1>
        <p className="opacity-70 max-w-md">
          Algun texto que resuma este informe en tres lineas. Algun texto que
          resuma este informe en tres lineas. Algun texto que resuma este
          informe en tres lineas.
        </p>
        <div className="">
          <Link href="/#why">
            <button className="border-2 border-gray-800 px-4 py-2 rounded-md">
              Leer el informe
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
