import { CardServiceI } from '@/interfaces';
import dynamic from 'next/dynamic';

const CardService = dynamic(
	() => import('./CardService').then(module => ({ default: module.CardService })),
	{
		ssr: false, // Deshabilita el SSR para este componente
		loading: () => <p>Cargando...</p>,
	},
);

const dataCard: CardServiceI[] = [
	{
		num: '01',
		title: 'Desarrollo web',
		description:
			'Nos aseguramos de que su sitio web se vea bien en cualquier dispositivo, con diseños que se adaptan perfectamente a diferentes tamaños de pantalla.',
		path: '/develop-web',
	},
	{
		num: '02',
		title: 'Diseños web UI/UX',
		description:
			'Creamos interfaces atractivas e intuitivas, optimizadas para mejorar la experiencia del usuario y aumentar la conversión.',
		path: 'develop-web',
	},
	{
		num: '03',
		title: 'Posicionamiento SEO',
		description:
			'Implementamos estrategias avanzadas de SEO para posicionar tu sitio en los primeros resultados de búsqueda y generar tráfico orgánico de calidad.',
		path: '/develop-web',
	},
	{
		num: '04',
		title: 'Inteligencia Artificial',
		description:
			'Integramos soluciones de inteligencia artificial para automatizar procesos, mejorar la toma de decisiones y ofrecer experiencias personalizadas.',
		path: '/develop-web',
	},
];

export const CardsServices = () => {
	return (
		<section className="mt-20">
			{dataCard.map(card => (
				<CardService key={card.num} {...card} />
			))}
		</section>
	);
};
