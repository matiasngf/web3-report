"use client"

import { MDXProvider } from "@mdx-js/react"
import type { MDXComponents } from "mdx/types"

const mdxCustomComponents: MDXComponents = {}

export const MDXLayout = ({ children }: { children: React.ReactNode }) => {
  return <MDXProvider components={mdxCustomComponents}>{children}</MDXProvider>
}
