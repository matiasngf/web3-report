import "~/css/global.css"

import { AppCanvas } from "~/components/common/canvas"

import { AppHooks } from "./layout/app-hooks"

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const LayoutComponent = (children as any).Layout || DefaultLayout

  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-font">
        <AppHooks />
        <AppCanvas />
        <LayoutComponent>
          <div className="relative z-20">{children}</div>
        </LayoutComponent>
      </body>
    </html>
  )
}

export default RootLayout
