import dynamic from 'next/dynamic';

const FadeInSection = dynamic(
	() => import('../../animations').then(module => ({ default: module.FadeInSection })),
	{
		ssr: false,
	},
);
const CarouselPlugin = dynamic(
	() => import('../../components').then(module => ({ default: module.CarouselPlugin })),
	{
		ssr: false,
	},
);

export const History = () => {
	return (
		<FadeInSection>
			<section className={`relative py-24  bg-purple-100 dark:bg-slate-900`}>
				<article className="px-4 mx-auto container flex flex-col md:flex-row justify-center md:justify-start gap-40">
					<div>
						<h5 className=" font-bold text-5xl md:text-6xl lg:text-5xl">
							<span className="bg-clip-text text-transparent text-6xl md:text-7xl bg-[linear-gradient(to_right,_#854ff3_0%,_#182848_51%,_#4b6cb7_100%)] dark:bg-[linear-gradient(to_right,_#00d2ff_0%,_#3a7bd5_51%,_#00d2ff_100%)]">
								Algunos clientes
							</span>
						</h5>
						<p className="w-11/12 md:w-2/3 lg:w-full text-xl md:text-3xl lg:text-xl font-normal dark:text-slate-200 mt-5">
							Estas son algunas personas con las que he trabajado mano a mano.
						</p>
					</div>
					<CarouselPlugin />
				</article>
			</section>
		</FadeInSection>
	);
};
