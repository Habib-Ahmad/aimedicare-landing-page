import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import eski from '../assets/eski.gif';

const Eski = () => {
	const [distance, setDistance] = useState(0);

	const handleScroll = () => {
		const scrollDistance = window.pageYOffset;
		const position = Number(scrollDistance) < 200 ? 10 : scrollDistance;
		setDistance(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		console.log(distance);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [distance]);

	return (
		<Box
			sx={{
				position: 'absolute',
				top: `calc(60vh + ${distance}px)`,
				right: `${distance < 200 ? '40vw' : 0}`
			}}
		>
			<img
				style={{ width: '250px', transition: 'all 2s' }}
				src={eski}
				alt="Eski"
			/>
		</Box>
	);
};

export default Eski;
