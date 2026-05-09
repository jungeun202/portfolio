// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

import createMDX from "@next/mdx";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);