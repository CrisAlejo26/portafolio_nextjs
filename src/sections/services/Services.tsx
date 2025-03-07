import dynamic from 'next/dynamic';

const CardsServices = dynamic(
	() => import('../../components').then(module => ({ default: module.CardsServices })),
	{
		loading: () => <p>Cargando...</p>,
	},
);
const TitleAndDescriptionLayout = dynamic(
	() => import('../../layouts').then(module => ({ default: module.TitleAndDescriptionLayout })),
	{
		loading: () => <p>Cargando...</p>,
	},
);

export const Services = () => {
	return (
		<TitleAndDescriptionLayout
			className="bg-purple-100 dark:bg-slate-900"
			title=" Nuestos servicios"
			description="Transformamos tus ideas en experiencias digitales únicas. Desde el diseño de
						páginas web hasta el desarrollo de sistemas personalizados, creamos
						soluciones atractivas y funcionales que impulsan tu negocio e inspiran a tus
						clientes.">
			<CardsServices />
		</TitleAndDescriptionLayout>
	);
};
