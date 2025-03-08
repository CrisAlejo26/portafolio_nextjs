// import withBundleAnalyzer from '@next/bundle-analyzer';

// const analyzer = withBundleAnalyzer({
// 	enabled: process.env.ANALYZE === 'true',
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		optimizePackageImports: ['react-icons/*', '@radix-ui/*', 'framer-motion'],
	},
	// swcMinify: false,
};

export default nextConfig;
