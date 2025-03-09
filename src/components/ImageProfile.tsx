import { profileImage } from '@/assets';
import Image from 'next/image';

export const ImageProfile = () => {
	return (
		<>
			<div className="w-80 h-80 bg-blue-500 rounded-3xl relative">
				<Image
					src={profileImage.src}
					alt="Fotografía de Cristian Alejandro Arroyave"
					layout="fill"
					objectFit="cover"
					quality={75}
					priority
					className="rounded-3xl"
				/>
			</div>
		</>
	);
};
