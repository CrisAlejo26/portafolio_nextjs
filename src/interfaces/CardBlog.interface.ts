import { StaticImageData } from 'next/image';

export interface CardBlogI {
	title: string;
	description: string;
	image: StaticImageData;
	date: string;
	info: string;
}
