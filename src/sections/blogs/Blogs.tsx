import dynamic from 'next/dynamic';

const TitleAndDescriptionLayout = dynamic(
	() => import('../../layouts').then(module => ({ default: module.TitleAndDescriptionLayout })),
	{
		loading: () => <p>Cargando...</p>,
	},
);
const Cards = dynamic(
	() => import('../../components').then(module => ({ default: module.CardsBlogs })),
	{
		loading: () => <p>Cargando...</p>,
	},
);

export const Blogs = () => {
	return (
		<>
			<TitleAndDescriptionLayout
				className="bg-purple-50 dark:bg-dark-background"
				title="Blogs recientes"
				description="Descubre tendencias en desarrollo web, UI/UX, IA y SEO. Aprende estrategias y herramientas clave para optimizar tu presencia digital y crear experiencias innovadoras.">
				<Cards />
			</TitleAndDescriptionLayout>
		</>
	);
};
