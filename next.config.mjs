import createMDX from "@next/mdx"

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    mdxRs: true,
    esmExternals: "loose",
  },
}

export default withMDX(nextConfig)
