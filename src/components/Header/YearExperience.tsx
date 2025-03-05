import { CountUp, FadeInSection } from '@/animations';

export const YearExperience = () => {
	return (
		<>
			<FadeInSection>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:place-items-center mt-24 md:mt-32">
					<section className="flex gap-2 items-center">
						<h3 className="text-9xl md:text-7xl text-blue-400 font-bold">
							<CountUp value={4} duration={1} />
						</h3>
						<h3 className="text-3xl md:text-xl text-blue-400">
							Años de <br /> Experiencia
						</h3>
					</section>
					<section className="flex gap-2 items-center">
						<h3 className="text-9xl md:text-7xl text-blue-400 font-bold">
							<CountUp value={5} duration={1} />+
						</h3>
						<h3 className="text-3xl md:text-xl text-blue-400">
							Proyectos <br /> Completados
						</h3>
					</section>
					<section className="flex gap-2 items-center">
						<h3 className="text-9xl md:text-7xl text-blue-400 font-bold">
							<CountUp value={20} duration={1} />
						</h3>
						<h3 className="text-3xl md:text-xl text-blue-400">
							Clientes <br /> Felices
						</h3>
					</section>
				</div>
			</FadeInSection>
		</>
	);
};
