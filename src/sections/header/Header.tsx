import { BackgroundHeaderLayout } from '@/layouts';
import dynamic from 'next/dynamic';
const Text = dynamic(
	() => import('../../components/Header').then(module => ({ default: module.Text })),
	{
		loading: () => <p>Cargando...</p>,
	},
);
const YearExperience = dynamic(
	() => import('../../components/Header').then(module => ({ default: module.YearExperience })),
	{
		loading: () => <p>Cargando...</p>,
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
