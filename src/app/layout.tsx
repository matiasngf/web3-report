import "~/css/global.css"

import { AppHooks } from "./app-hooks"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <AppHooks />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
