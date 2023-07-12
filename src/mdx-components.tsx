import type { MDXComponents } from "mdx/types"

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="text-3xl font-extrabold">{children}</h1>
    ),
    h2: ({ children }) => <h2 className="text-2xl">{children}</h2>,
    a: ({ children, ...props }) => (
      <a className="text-blue-600 hover:text-blue-900" {...props}>
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc space-y-2 pl-8">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal space-y-2 pl-8">{children}</ol>
    ),
    ...components,
  }
}
