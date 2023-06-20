import { Vector2 } from "three"
import { create } from "zustand"

export interface ScreenSizeStore {
  /** Width of the screen in px */
  width: number
  /** Height of the screen in px */
  height: number
  /** Pixel ratio of the screen */
  pixelRatio: number
  vec: Vector2
  /** Function to update on frame */
  raf: () => void
}

export const useScreenSizeStore = create<ScreenSizeStore>((set) => ({
  width: 1920,
  height: 1080,
  pixelRatio: 1,
  vec: new Vector2(1920, 1080),
  raf: () => {
    set((state) => {
      const { innerWidth, innerHeight, devicePixelRatio } = window
      if (
        state.width === innerWidth &&
        state.height === innerHeight &&
        state.pixelRatio === devicePixelRatio
      ) {
        return {}
      }
      const width = innerWidth
      const height = innerHeight
      const pixelRatio = devicePixelRatio
      state.vec.set(width, height)
      return {
        width,
        height,
        pixelRatio,
      }
    })
  },
}))
