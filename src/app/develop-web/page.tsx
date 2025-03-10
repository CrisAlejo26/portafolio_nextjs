// app/desarrollo-web/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import { develop_web } from '@/assets';

export const metadata: Metadata = {
	title: 'Desarrollo Web - Servicios de Desarrollo Web Responsivo en [Tu Ciudad]',
	description:
		'Ofrecemos servicios de desarrollo web responsivo y optimizado para SEO en [Tu Ciudad]. Nos aseguramos de que su sitio web se vea bien en cualquier dispositivo, con diseños adaptados a cada pantalla.',
	keywords: [
		'Desarrollo web',
		'Diseño web responsivo',
		'SEO',
		'Optimización web',
		'Desarrollo web en [Tu Ciudad]',
	],
	openGraph: {
		title: 'Desarrollo Web - Servicios Responsivos en [Tu Ciudad]',
		description:
			'Desarrollo Web: Sitios adaptados a cualquier dispositivo, optimizados para SEO y diseñados a medida para potenciar tu presencia digital en [Tu Ciudad].',
		images: [
			{
				url: 'https://tu-dominio.com/og-webdev.jpg',
				width: 1200,
				height: 630,
				alt: 'Desarrollo Web Responsivo',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Desarrollo Web - Servicios Responsivos en [Tu Ciudad]',
		description:
			'Desarrollo Web: Creamos sitios web responsivos y optimizados para SEO en [Tu Ciudad].',
		images: ['https://tu-dominio.com/og-webdev.jpg'],
	},
};

export default function WebDevelopmentPage() {
	return (
		<main className="flex flex-col items-center px-4 py-12 max-w-7xl mx-auto">
			{/* Título del servicio */}
			<h1 className="text-4xl font-bold text-center mb-8">Desarrollo Web</h1>

			{/* Imagen de ancho completo */}
			<div className="w-full mb-8 max-h-lvh">
				<Image
					src={develop_web}
					alt="Diseño de sitio web responsivo"
					className="w-full h-auto object-cover rounded-lg"
					priority
				/>
			</div>

			{/* Descripción rica del servicio */}
			<section className="prose lg:prose-xl text-justify mb-8">
				<p>
					En nuestro servicio de <strong>Desarrollo Web</strong>, nos comprometemos a
					crear sitios web que no solo sean visualmente atractivos, sino también
					completamente responsivos y optimizados para brindar una experiencia de usuario
					excepcional en cualquier dispositivo. Nuestros diseños se adaptan perfectamente
					a diferentes tamaños de pantalla, asegurando que su negocio tenga una presencia
					digital moderna y eficaz.
				</p>
				<p>
					Con sede en <strong>Benidorm - Alicante</strong>, trabajamos aplicando las
					últimas tendencias y tecnologías, garantizando que cada proyecto cumpla con las
					mejores prácticas de SEO para mejorar el posicionamiento en buscadores. Nuestro
					enfoque se basa en la innovación, la personalización y la optimización, lo que
					se traduce en soluciones únicas y a medida que impulsan su éxito digital.
				</p>
			</section>
		</main>
	);
}
