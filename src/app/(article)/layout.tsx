import type { ReactNode } from "react"

import { SideMenu } from "./menu"
import { AppHeader } from "./menu/app-header"
import { MenuFooter } from "./menu/menu-footer"

export default function ArticleLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <AppHeader />
      <div className="flex container space-x-12 pb-12">
        <div className="w-44 shrink-0 pr-5 border-r-[1px] border-r-gray-800 text-font-400">
          <div className="sticky top-10">
            <SideMenu />
          </div>
        </div>
        <div className="space-y-10">
          <div className="space-y-8 text-lg leading-relaxed">{children}</div>
          <div className="pt-10 border-t-[1px] border-t-gray-800">
            <MenuFooter />
          </div>
        </div>
      </div>
    </div>
  )
}
