"use client"

import Lenis from "@studio-freight/lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useMemo } from "react"

import { useRaf } from "./use-raf"
import { useScrollStore } from "./use-scroll"

type LenisOptions = ConstructorParameters<typeof Lenis>[0]

export const useLenis = (
  options: LenisOptions = {
    smoothWheel: true,
    normalizeWheel: true,
  }
) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  const setYScroll = useScrollStore((state) => state.setYScroll)

  const optionsKey = JSON.stringify(options)

  const lenis = useMemo(() => {
    if (typeof window === "undefined") return
    const l = new Lenis(options)
    l.on("scroll", (e: any) => {
      ScrollTrigger.update()
      setYScroll(e.animatedScroll)
    })
    return l
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionsKey, setYScroll])

  useRaf(
    (time) => {
      lenis?.raf(time)
    },
    [lenis],
    false,
    true
  )

  return
}
