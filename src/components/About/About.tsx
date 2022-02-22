import { Box, Typography } from '@mui/material';
import { useStyles } from './useStyles';
import blob from '../../assets/about/blob.svg';

const About = (): JSX.Element => {
	const classes = useStyles();

	return (
		<Box id="about" className={classes.about}>
			<img src={blob} alt="" className={classes.blob} />
			<Typography variant="h2" sx={{ marginBottom: 2 }}>
				About Us
			</Typography>
			<Typography className={classes.body}>
				AiMedicare is building a revolutionary healthcare service delivery
				technology across the African continent. We have improved ease of access
				to health service through the integration of an ecosystem and tech
				infrastructure. We merged telemedicine, IoMT (internet of Medical
				things), Artificial intelligence, big data health analytics and
				Decentralized Ledger Technology (Blockchain technology) to give a
				patient tailored healthcare solution.
			</Typography>
		</Box>
	);
};

export default About;
