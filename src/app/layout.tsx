import "~/css/global.css"

import { AppCanvas } from "~/components/common/canvas"

import { AppHooks } from "./app-hooks"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <AppHooks />
        <AppCanvas />
        <div className="relative z-20">{children}</div>
      </body>
    </html>
  )
}

export default RootLayout
