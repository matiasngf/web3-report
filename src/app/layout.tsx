import { clsx } from "clsx"

import { AppHooks } from "./app-hooks"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body style={{ opacity: 0 }} className={clsx()}>
        <AppHooks />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
