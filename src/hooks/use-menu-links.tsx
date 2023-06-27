import { usePathname } from "next/navigation"
import { useMemo } from "react"

import { menuItems } from "~/app/(article)/menu"

export const useMenuLinks = () => {
  const pathName = usePathname()
  const menu = useMemo(() => {
    const currentIndex = menuItems.findIndex((item) => item.path === pathName)
    const current = menuItems[currentIndex]
    const next = menuItems[currentIndex + 1]
    const previous = menuItems[currentIndex - 1]
    return {
      currentIndex,
      current,
      next,
      previous,
    }
  }, [pathName])

  return menu
}
