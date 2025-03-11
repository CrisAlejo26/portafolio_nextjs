import { FaWhatsapp } from 'react-icons/fa';

export const WhatsAppButton = () => {
	const phoneNumber = '+34641305623';
	const message = 'Hola, me gustaría hablar contigo sobre un proyecto.';

	const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

	return (
		<a
			href={whatsappUrl}
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 text-white bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-lg transition-all duration-300 animate-float"
			aria-label="Chat on WhatsApp"
		>
			<FaWhatsapp className="w-8 h-8" />
		</a>
	);
};
