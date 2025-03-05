'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { profileImage } from '@/assets';

export const ImageProfile: React.FC = () => {
	return (
		<motion.div
			className="relative w-80 h-80 md:w-[25rem] md:h-[25rem] lg:w-72 lg:h-72 xl:w-96 xl:h-96 overflow-hidden rounded-xl"
			initial={{ rotate: 5, borderColor: 'rgba(0,0,0,0)' }}
			whileHover={{ rotate: 0, borderColor: 'rgba(138,43,226,1)' }}
			transition={{ duration: 0.3 }}
			style={{ borderWidth: '2px', borderStyle: 'solid' }}>
			<Image
				src={profileImage.src}
				alt="Fotografía de Cristian Alejandro Arroyave"
				fill
				className="object-cover"
				sizes="(max-width: 640px) 20rem, (max-width: 768px) 25rem, (max-width: 1024px) 18rem, (max-width: 1280px) 24rem, 24rem"
				quality={75}
			/>
		</motion.div>
	);
};
