import { Box, Typography, useMediaQuery } from '@mui/material';
import { useStyles } from './useStyles';
import iPhone from '../../assets/about/iPhone.png';
import features from '../../assets/about/features.png';
import arrow from '../../assets/about/arrow.svg';
import one from '../../assets/about/one.svg';

const About = (): JSX.Element => {
	const classes = useStyles();
	const isDesktop = useMediaQuery('(min-width: 900px)');

	if (!isDesktop)
		return (
			<Box id="about" className={classes.about}>
				<Box id="about" className={classes.headingWrapper} data-aos="fade-up">
					<Typography variant="h6">AiMedicare</Typography>
					<Typography variant="h2" sx={{ marginBottom: 2 }}>
						About Us
					</Typography>
					<Typography className={classes.text}>
						AiMedicare is building a revolutionary healthcare service delivery
						technology across the African continent. We have improved ease of
						access to health service through the integration of an ecosystem and
						tech infrastructure. We merged telemedicine, IoMT (internet of
						Medical things), Artificial intelligence, big data health analytics
						and Decentralized Ledger Technology (Blockchain technology) to give
						a patient tailored healthcare solution.
					</Typography>
				</Box>

				<Box
					id="about"
					className={classes.telemedicineWrapper}
					data-aos="fade-up"
				>
					<Typography variant="h6">AiMedicare</Typography>
					<Typography variant="h2" sx={{ marginBottom: 2 }}>
						Telemedicine
					</Typography>
					<Typography className={classes.text}>
						Telehealth is the distribution of health-related services and
						information via electronic information and telecommunication
						technologies. It allows long-distance patient and clinician contact,
						care, advice, reminders, education, intervention, monitoring, and
						remote admissions.
					</Typography>
				</Box>

				<Box
					sx={{ display: 'flex', padding: '0 5vw', margin: '100px 0' }}
					data-aos="fade-up"
				>
					<img src={iPhone} alt="Phone" className={classes.phone} />
					<Box className={classes.featuresWrapper}>
						<img src={features} alt="Features" className={classes.features} />
						<img src={arrow} alt="Arrow" className={classes.arrow} />
					</Box>
				</Box>
			</Box>
		);

	return (
		<Box id="about" className={classes.about} data-aos="fade-up">
			<Box id="about" className={classes.headingWrapper}>
				<Typography variant="h6">AiMedicare</Typography>
				<Typography variant="h2" sx={{ marginBottom: 2 }}>
					About Us
				</Typography>
				<Typography className={classes.text}>
					AiMedicare is building a revolutionary healthcare service delivery
					technology across the African continent. We have improved ease of
					access to health service through the integration of an ecosystem and
					tech infrastructure. We merged telemedicine, IoMT (internet of Medical
					things), Artificial intelligence, big data health analytics and
					Decentralized Ledger Technology (Blockchain technology) to give a
					patient tailored healthcare solution.
				</Typography>
			</Box>

			<img
				src={iPhone}
				alt="Phone"
				className={classes.phone}
				data-aos="fade-up"
			/>
			<img
				src={arrow}
				alt="Arrow"
				className={classes.arrow}
				data-aos="fade-up"
			/>

			<Box data-aos="fade-up">
				<img src={features} alt="Features" className={classes.features} />
				<Box id="about" className={classes.telemedicineWrapper}>
					<img src={one} alt="One" className={classes.one} />
					<Typography variant="h6">AiMedicare</Typography>
					<Typography variant="h2" sx={{ marginBottom: 2 }}>
						Telemedicine
					</Typography>
					<Typography className={classes.text}>
						Telehealth is the distribution of health-related services and
						information via electronic information and telecommunication
						technologies. It allows long-distance patient and clinician contact,
						care, advice, reminders, education, intervention, monitoring, and
						remote admissions.
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default About;
