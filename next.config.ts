/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
			},
		],
	},
	async rewrites() {
		return [
			
			{
				source: '/aktualnosci',
				destination: '/blog',
			},
			{
				source: '/aktualnosci/:slug*',
				destination: '/blog/:slug*',
			},
			{
				source: '/realizacje',
				destination: '/realisations',
			},
			{
				source: '/kontakt',
				destination: '/contact',
			},
			{
				source: '/polityka-prywatnosci',
				destination: '/privacy-policy',
			},
		]
	},
}

export default nextConfig
