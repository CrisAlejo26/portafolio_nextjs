import dynamic from 'next/dynamic';

const CardService = dynamic(
	() => import('../../components').then(module => ({ default: module.CardService })),
	{
		loading: () => <p>Cargando...</p>,
	},
);

export const Services = () => {
	return (
		<section className="bg-purple-100 dark:bg-slate-900  relative py-24 min-h-screen ">
			<article className="px-4 mx-auto container">
				<h2 className="text-center font-bold text-5xl md:text-6xl lg:text-5xl">
					<span className="bg-clip-text text-transparent text-6xl md:text-7xl bg-[linear-gradient(to_right,_#854ff3_0%,_#182848_51%,_#4b6cb7_100%)] dark:bg-[linear-gradient(to_right,_#00d2ff_0%,_#3a7bd5_51%,_#00d2ff_100%)]">
						Mis servicios
					</span>
				</h2>
				<div className="flex justify-center my-5">
					<p className="w-full md:w-2/3 lg:w-2/4 text-xl md:text-3xl lg:text-xl font-normal text-center dark:text-slate-200">
						Transformamos tus ideas en experiencias digitales únicas. Desde el diseño de
						páginas web hasta el desarrollo de sistemas personalizados, creamos
						soluciones atractivas y funcionales que impulsan tu negocio e inspiran a tus
						clientes.
					</p>
				</div>
				<CardService />
			</article>
		</section>
	);
};
