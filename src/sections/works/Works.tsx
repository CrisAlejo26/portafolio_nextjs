import dynamic from 'next/dynamic';

const TitleAndDescriptionLayout = dynamic(
	() => import('../../layouts').then(module => ({ default: module.TitleAndDescriptionLayout })),
	{
		loading: () => <p>Cargando...</p>,
	},
);
const Cards = dynamic(
	() => import('../../components').then(module => ({ default: module.Cards })),
	{
		loading: () => <p>Cargando...</p>,
	},
);

export const Works = () => {
	return (
		<TitleAndDescriptionLayout
			className="bg-purple-50 dark:bg-dark-background"
			title="Trabajos recientes"
			description="Convertimos cada proyecto en una obra única, donde cada detalle refleja la esencia de sus ideas y marca. Nuestros trabajos recientes destacan por su innovación y funcionalidad, inspirando tanto a usted como a sus clientes a dar el siguiente gran paso en el mundo digital.">
			<Cards />
		</TitleAndDescriptionLayout>
	);
};
