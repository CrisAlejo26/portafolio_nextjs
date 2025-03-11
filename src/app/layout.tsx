import type { Metadata } from 'next';
import { ThemeProvider, ThemeToggleButton } from '@/components';
import dynamic from 'next/dynamic';
import './globals.css';

const WhatsAppButton = dynamic(
	() => import('@/components/WhatsAppButton').then(module => ({ default: module.WhatsAppButton })),
	{
		ssr: false,
	},
);

export const metadata: Metadata = {
	title: 'Cristian Code | Portfolio de Cristian Alejandro Arroyave',
	description:
		'Portfolio de Cristian Code, experto en desarrollo de aplicaciones web utilizando NestJS, Node, TypeScript, Next.js, Python y en la integración de inteligencia artificial. Descubre mis proyectos innovadores y soluciones tecnológicas avanzadas.',
	authors: [{ name: 'Cristian Alejandro Arroyave' }],
	keywords: [
		'Cristian Code',
		'Cristian Alejandro Arroyave',
		'Pagina web',
		'IA',
		'TypeScript',
		'Next.js',
		'Python',
		'Inteligencia Artificial',
		'AI',
		'Desarrollo Web',
		'Portfolio',
		'SEO',
	],
	openGraph: {
		title: 'Cristian Code | Portfolio de Cristian Alejandro Arroyave',
		description:
			'Descubre los proyectos y soluciones tecnológicas de Cristian Code, experto en desarrollo web con NestJS, Node, TypeScript, Next.js, Python y en la integración de inteligencia artificial.',
		url: 'https://tu-dominio.com', // Reemplaza por tu dominio real
		siteName: 'Cristian Code',
		images: [
			{
				url: 'https://tu-dominio.com/og-image.jpg', // Reemplaza con la URL de tu imagen OG
				width: 1200,
				height: 630,
				alt: 'Portfolio de Cristian Code',
			},
		],
		locale: 'es_ES',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Cristian Code | Portfolio de Cristian Alejandro Arroyave',
		description:
			'Descubre los proyectos de Cristian Code, experto en desarrollo web y en la integración de inteligencia artificial usando tecnologías como NestJS, Node, TypeScript, Next.js y Python.',
		images: ['https://tu-dominio.com/og-image.jpg'], // Reemplaza con la URL de tu imagen
		site: '@crisalejo26', // Reemplaza con tu usuario de Twitter, si lo tienes
		creator: '@crisalejo26',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="es"
			suppressHydrationWarning
			className="overflow-y-scroll dark:bg-black scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-sky-400 dark:scrollbar-thumb-blue-950 dark:scrollbar-track-blue-700">
			<body className={`antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange>
					{children}
					<ThemeToggleButton />
					<WhatsAppButton />
				</ThemeProvider>
			</body>
		</html>
	);
}
