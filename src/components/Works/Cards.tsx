import { autofillai, calicer, cardioIns, carrent } from '@/assets';
import { CardWorkI } from '@/interfaces';
import dynamic from 'next/dynamic';

const Card = dynamic(() => import('./Card').then(module => ({ default: module.Card })), {
	loading: () => <p>Cargando...</p>,
});

const dataCard: CardWorkI[] = [
	{ bussiness: 'CardioIns', title: 'Administrador de primeros auxilios', image: cardioIns },
	{
		bussiness: 'Training and educational services',
		title: 'AI que completa campos en archivos PDF',
		image: autofillai,
	},
	{
		bussiness: 'Calicer S.L.',
		title: 'Gestor de auditorias',
		image: calicer,
	},
	{
		bussiness: 'Bitcoin consultancy group S.L.',
		title: 'Gestor de monedas',
		image: carrent,
	},
];

export const Cards = () => {
	return (
		<section className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center">
			{dataCard.map((card, index) => (
				<Card key={index} {...card} />
			))}
		</section>
	);
};
