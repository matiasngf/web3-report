"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ComponentProps } from "react"

import { clx } from "~/utils/clx"

export interface MenuLinkProps extends ComponentProps<typeof Link> {
  activeClassName?: string
}

export const MenuLink = ({
  className,
  activeClassName,
  children,
  ...props
}: MenuLinkProps) => {
  const pathName = usePathname()
  const isActive = pathName === props.href

  return (
    <Link className={clx(className, isActive && activeClassName)} {...props}>
      {children}
    </Link>
  )
}
