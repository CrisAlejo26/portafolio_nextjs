import { CardWorkI } from '@/interfaces';
import Image from 'next/image';

export const CardWork = ({ image, title, bussiness }: CardWorkI) => {
	return (
		<article className="w-80 bg-blue-700 dark:bg-blue-900 rounded-xl overflow-hidden hover:shadow-blue-600 dark:hover:shadow-blue-800 shadow-xl transition-all duration-300 ease-in-out flex flex-col gap-10 items-center pb-10 px-2 sm:px-5 cursor-pointer hover:scale-105">
			<div className="w-56 h-4 bg-blue-500 rounded-br-full rounded-bl-full" />
			<div className="w-36 h-48 bg-blue-500 rounded-3xl relative">
				<Image
					src={image.src}
					alt="Fotografía de Cristian Alejandro Arroyave"
					fill
					quality={75}
					className="object-cover rounded-3xl"
				/>
			</div>
			<h3 className="font-semibold text-xl text-white text-center h-8">{title}</h3>
			<h4 className="text-sm text-white">{bussiness}</h4>
		</article>
	);
};
