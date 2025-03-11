import { messageSvg } from '@/assets';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Form = dynamic(() => import('../../components').then(module => ({ default: module.Form })), {
	ssr: false,
});
const FadeInSection = dynamic(
	() => import('../../animations').then(module => ({ default: module.FadeInSection })),
	{
		ssr: false,
	},
);

export const Contact = () => {
	return (
		<>
			<FadeInSection>
				<section className={`relative py-24 bg-purple-100 dark:bg-slate-900`}>
					<article className="px-4 mx-auto container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
						<Form />
						<div className="hidden lg:flex justify-center items-center">
							<div className="relative w-full max-w-lg h-[400px]">
								<div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
								<div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
								<div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
								<div className="relative">
									<Image
										src={messageSvg}
										alt="Contact illustration"
										width={500}
										height={400}
										className="relative z-10"
									/>
								</div>
							</div>
						</div>
					</article>
				</section>
			</FadeInSection>
		</>
	);
};
