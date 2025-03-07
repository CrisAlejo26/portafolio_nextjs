import dynamic from 'next/dynamic';

const FadeInSection = dynamic(
	() => import('../animations').then(module => ({ default: module.FadeInSection })),
	{
		loading: () => <p>Cargando...</p>,
	},
);

interface TitleAndDescriptionLayoutI {
	children: React.ReactNode;
	title: string;
	description: string;
	className?: string;
}

export const TitleAndDescriptionLayout = ({
	children,
	title,
	description,
	className,
}: TitleAndDescriptionLayoutI) => {
	return (
		<FadeInSection>
			<section className={` relative py-24 min-h-screen ${className}`}>
				<article className="px-4 mx-auto container">
					<h2 className="text-center font-bold text-5xl md:text-6xl lg:text-5xl">
						<span className="bg-clip-text text-transparent text-6xl md:text-7xl bg-[linear-gradient(to_right,_#854ff3_0%,_#182848_51%,_#4b6cb7_100%)] dark:bg-[linear-gradient(to_right,_#00d2ff_0%,_#3a7bd5_51%,_#00d2ff_100%)]">
							{title}
						</span>
					</h2>
					<div className="flex justify-center my-5">
						<p className="w-full md:w-2/3 lg:w-2/4 text-xl md:text-3xl lg:text-xl font-normal text-center dark:text-slate-200">
							{description}
						</p>
					</div>
					{children}
				</article>
			</section>
		</FadeInSection>
	);
};
