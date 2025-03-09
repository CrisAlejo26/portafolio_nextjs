import dynamic from 'next/dynamic';

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
				<section className={` relative py-24 bg-purple-100 dark:bg-slate-900`}>
					<article className="px-4 mx-auto container grid grid-cols-2">
						<Form />
						<div></div>
					</article>
				</section>
			</FadeInSection>
		</>
	);
};
