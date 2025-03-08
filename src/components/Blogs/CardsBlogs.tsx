import { blog_1 } from '@/assets';
import { CardBlogI } from '@/interfaces';
import dynamic from 'next/dynamic';

const Card = dynamic(() => import('./CardBlogs').then(module => ({ default: module.CardBlogs })), {
	ssr: false,
});

const dataCard: CardBlogI[] = [
	{
		title: 'La inteligencia Artificial',
		description: '¿Cúal usar?',
		image: blog_1,
		date: 'Mar 08, 2024',
		info: 'Blog informático',
	},
	{
		title: 'La inteligencia Artificial',
		description: '¿Cúal usar?',
		image: blog_1,
		date: 'Mar 08, 2024',
		info: 'Blog informático',
	},
	{
		title: 'La inteligencia Artificial',
		description: '¿Cúal usar?',
		image: blog_1,
		date: 'Mar 08, 2024',
		info: 'Blog informático',
	},
	{
		title: 'La inteligencia Artificial',
		description: '¿Cúal usar?',
		image: blog_1,
		date: 'Mar 08, 2024',
		info: 'Blog informático',
	},
];

export const CardsBlogs = () => {
	return (
		<section className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center">
			{dataCard.map(card => (
				<Card key={card.title} {...card} />
			))}
		</section>
	);
};
