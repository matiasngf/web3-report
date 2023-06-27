"use client"

import Link from "next/link"

import { useMenuLinks } from "~/hooks/use-menu-links"

export const MenuFooter = () => {
  const menuLinks = useMenuLinks()

  return (
    <div className="flex justify-between">
      {menuLinks.previous ? (
        <Link href={menuLinks.previous.path} className="text-font-400">
          {"←"} {menuLinks.previous.title}
        </Link>
      ) : (
        <div></div>
      )}
      {menuLinks.next && (
        <Link prefetch href={menuLinks.next.path} className="text-font">
          {menuLinks.next.title} {"→"}
        </Link>
      )}
    </div>
  )
}
