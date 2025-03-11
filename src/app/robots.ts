import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: [
				'/private/',
				'/admin/',
				'/*.json$',
				'/api/',
			],
		},
		sitemap: 'https://www.cristianarroyave.com/sitemap.xml', // Replace with your actual domain
	};
}
