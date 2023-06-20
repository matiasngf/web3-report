"use client"

import gsap from "gsap"
import { DependencyList, useEffect } from "react"

export const useRaf = (
  callback: gsap.TickerCallback,
  deps?: DependencyList,
  once?: boolean,
  prioritize?: boolean
) => {
  useEffect(() => {
    gsap.ticker.add(callback, once, prioritize)
    return () => {
      gsap.ticker.remove(callback)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
