import { FadeInSection } from '@/animations';
import { TextBackground } from '../TextBackground';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { ImageProfile } from '../ImageProfile';
import { Button } from '../ui';

export const Text = () => {
	return (
		<>
			<FadeInSection>
				<TextBackground />
				<div className="pt-10 md:pt-20 lg:pt-36">
					<section className="flex flex-col lg:flex-row items-center justify-center gap-16 md:gap-20 lg:gap-2 md:justify-around">
						<article className="space-y-4">
							<h1 className="text-[#182848] font-bold text-5xl md:text-6xl lg:text-5xl flex flex-col">
								<span className="mb-3">Soy Cristian </span>
								<span className="bg-clip-text text-transparent text-6xl md:text-7xl bg-[linear-gradient(to_right,_#854ff3_0%,_#182848_51%,_#4b6cb7_100%)]">
									Desarrollador
								</span>
								<span className="bg-clip-text text-transparent text-6xl md:text-7xl bg-[linear-gradient(to_right,_#854ff3_0%,_#182848_51%,_#4b6cb7_100%)]">
									Web
								</span>
							</h1>
							<h2 className="w-full md:w-2/3 lg:w-2/5 text-xl md:text-3xl lg:text-xl font-normal">
								Analizo problemas complejos de la experiencia del usuario para crear
								soluciones centradas en la integridad que conectan a miles de
								millones de personas.
							</h2>
							<div className="flex gap-5 items-center">
								<Button rounded={'full'} variant={'outline'} size={'xl'}>
									Descargar CV <MdOutlineFileDownload />
								</Button>
								<Button
									rounded={'full'}
									variant={'outline'}
									size={'sm'}
									aria-label="Visitar perfil de LinkedIn">
									<FaLinkedin />
								</Button>
								<Button
									rounded={'full'}
									variant={'outline'}
									size={'sm'}
									aria-label="Visitar perfil de GitHub">
									<FaGithub />
								</Button>
							</div>
						</article>
						<article className="mt-16 md:mt-0">
							<ImageProfile />
						</article>
					</section>
				</div>
			</FadeInSection>
		</>
	);
};
