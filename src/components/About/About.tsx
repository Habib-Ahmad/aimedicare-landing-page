import { Box, Typography } from '@mui/material';
import { useStyles } from './useStyles';
import blob from '../../assets/about/blob.svg';
import telemedicine from '../../assets/about/telemedicine.svg';
import iomt from '../../assets/about/iomt.svg';
import ai from '../../assets/about/ai.svg';
import bigData from '../../assets/about/bigData.svg';
import ledger from '../../assets/about/ledger.svg';

const About = (): JSX.Element => {
	const classes = useStyles();

	return (
		<Box id="about" className={classes.about}>
			<img src={blob} alt="" className={classes.blob} />
			<Typography variant="h2" sx={{ marginBottom: 2 }}>
				About Us
			</Typography>
			<Typography
				className={classes.body}
				data-aos="fade-up"
				data-aos-delay="150"
			>
				AiMedicare is building a revolutionary healthcare service delivery
				technology across the African continent. We have improved ease of access
				to health service through the integration of an ecosystem and tech
				infrastructure. We merged telemedicine, IoMT (internet of Medical
				things), Artificial intelligence, big data health analytics and
				Decentralized Ledger Technology (Blockchain technology) to give a
				patient tailored healthcare solution.
			</Typography>

			<Box className={classes.icons}>
				<img src={telemedicine} alt={telemedicine} data-aos="zoom-in" />
				<img src={iomt} alt={iomt} data-aos="zoom-in" data-aos-delay="200" />
				<img src={ai} alt={ai} data-aos="zoom-in" data-aos-delay="400" />
				<img
					src={bigData}
					alt={bigData}
					data-aos="zoom-in"
					data-aos-delay="600"
				/>
				<img
					src={ledger}
					alt={ledger}
					data-aos="zoom-in"
					data-aos-delay="800"
				/>
			</Box>
		</Box>
	);
};

export default About;
