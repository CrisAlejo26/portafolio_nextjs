import { IoMdInformationCircleOutline } from 'react-icons/io';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { CardBlogI } from '@/interfaces';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const FadeInSection = dynamic(
	() => import('../../animations').then(module => ({ default: module.FadeInSection })),
	{
		ssr: false,
	},
);

export const CardBlogs = ({ title, description, image, date, info }: CardBlogI) => {
	return (
		<FadeInSection>
			<section className="group bg-transparent w-80 h-96 p-4 perspective-[1000px] font-sans cursor-pointer justify-self-center">
				<div className="relative w-full h-full  transition-all [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-500 ease-in-out">
					{/* Cara frontal */}
					<div className="absolute flex flex-col text-center justify-center w-full h-full [backface-visibility:hidden] shadow-[0_8px_14px_0_rgba(0,0,0,0.2)] border rounded-xl border-indigo-200 bg-gradient-to-br from-blue-300 via-blue-50 to-blue-300 text-indigo-600 dark:border-indigo-700 dark:bg-gradient-to-br dark:from-blue-800 dark:via-blue-500 dark:to-indigo-800 dark:text-indigo-50 ">
						<p className="text-[1.5em] font-extrabold">{title}</p>
						<p>{description}</p>
					</div>
					{/* Cara trasera */}
					<div className="absolute w-full h-full [backface-visibility:hidden] shadow-[0_8px_14px_0_rgba(0,0,0,0.2)] border rounded-xl border-indigo-300 bg-gradient-to-br from-purple-300 via-indigo-300 to-blue-400 text-white dark:border-indigo-800 dark:bg-gradient-to-br dark:from-purple-900 dark:via-indigo-900 dark:to-blue-900 [transform:rotateY(180deg)]">
						<div className="w-full h-full p-4 relative">
							<Image
								src={image.src}
								alt="Fotografía de Cristian Alejandro Arroyave"
								fill
								quality={75}
								className="object-cover rounded-lg"
							/>
							<div className="p-4 absolute bottom-2 w-11/12 bg-white/60 dark:bg-slate-800 rounded-lg">
								<div className="flex gap-6 justify-center">
									<div className="flex items-center gap-2">
										<FaRegCalendarAlt />
										<p>{date}</p>
									</div>
									<div className="flex items-center gap-2">
										<IoMdInformationCircleOutline />
										<p>{info}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</FadeInSection>
	);
};
