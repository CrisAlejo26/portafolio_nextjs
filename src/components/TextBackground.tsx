'use client';

import { AnimatePresence, motion } from 'framer-motion';

export const TextBackground = () => {
	return (
		<>
			<div className="relative">
				{/* Contenedor del texto de fondo */}
				<div className="absolute inset-0 select-none pointer-events-none xl:-top-60">
					<AnimatePresence>
						<motion.svg
							viewBox="0 0 1000 1000"
							preserveAspectRatio="xMidYMid meet"
							className="w-full max-w-screen-xl"
							animate={{ scale: [1, 1.1, 1] }}
							transition={{ duration: 2, repeat: Infinity }}>
							<defs>
								<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
									<stop offset="0%" stopColor="#00d2ff" />
									<stop offset="100%" stopColor="#3a7bd5" />
								</linearGradient>
							</defs>
							<text
								x="50%"
								y="50%"
								textAnchor="middle"
								dy=".35em"
								style={{ fontSize: 'clamp(120px, 45vw, 120px)', opacity: '0.2' }}
								fontWeight="bold"
								fill="url(#gradient)">
								HOLA
							</text>
						</motion.svg>
					</AnimatePresence>
				</div>
			</div>
		</>
	);
};
