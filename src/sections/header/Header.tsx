import dynamic from 'next/dynamic';

const BackgroundHeaderLayout = dynamic(
	() => import('../../layouts').then(module => ({ default: module.BackgroundHeaderLayout })),
	{
		ssr: false,
	},
);
const Text = dynamic(() =>
	import('../../components/Header').then(module => ({ default: module.Text })),
);
const YearExperience = dynamic(
	() => import('../../components/Header').then(module => ({ default: module.YearExperience })),
	{
		ssr: false,
	},
);

export const Header = () => {
	return (
		<>
			<BackgroundHeaderLayout>
				<article className="px-4 mx-auto container">
					<Text />
					<YearExperience />
				</article>
			</BackgroundHeaderLayout>
		</>
	);
};
