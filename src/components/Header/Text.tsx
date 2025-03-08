import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import dynamic from 'next/dynamic';

const FadeInSection = dynamic(
	() => import('../../animations').then(module => ({ default: module.FadeInSection })),
	{
		ssr: false,
	},
);
const TextBackground = dynamic(
	() => import('../TextBackground').then(module => ({ default: module.TextBackground })),
	{
		ssr: false,
	},
);
const ImageProfile = dynamic(
	() => import('../ImageProfile').then(module => ({ default: module.ImageProfile })),
	{
		ssr: false,
	},
);
const Button = dynamic(() => import('../ui').then(module => ({ default: module.Button })), {
	ssr: false,
});

export const Text = () => {
	return (
		<>
			<FadeInSection>
				<TextBackground />
				<div className="pt-10 md:pt-20 lg:pt-36">
					<section className="flex flex-col lg:flex-row items-center justify-center gap-16 md:gap-20 lg:gap-2 md:justify-around">
						<article className="space-y-4">
							<h1 className="text-[#182848] dark:text-slate-200 font-bold text-4xl md:text-6xl lg:text-5xl flex flex-col">
								<span className="mb-3">Soy Cristian</span>
								<span className="bg-clip-text text-transparent text-5xl md:text-7xl custom-text-gradient">
									Desarrollador Web
								</span>
								<span className="bg-clip-text text-transparent text-5xl md:text-7xl custom-text-gradient py-3">
									Especialista en IA
								</span>
							</h1>
							<h2 className="w-11/12 md:w-2/3 lg:w-2/5 text-xl md:text-3xl lg:text-xl font-normal">
								Desarrollo cada <strong>página web</strong> con tecnología moderna y
								optimización para SEO, integrando soluciones de <strong>IA</strong>{' '}
								para mejorar la experiencia del usuario.
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
