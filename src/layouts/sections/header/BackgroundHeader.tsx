interface BackgroundHeaderProps {
	children: React.ReactNode;
}

export const BackgroundHeaderLayout = ({ children }: BackgroundHeaderProps) => {
	return (
		<section className="bg-purple-50 relative py-24 min-h-screen">
			{/* Cubos en la pantalla */}
			{Array.from({ length: 6 }, (_, index) => (
				<div key={index} className="cube"></div>
			))}
			{children}
		</section>
	);
};
