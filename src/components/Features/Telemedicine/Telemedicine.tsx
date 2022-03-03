import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useStyles } from './useStyles';
import iPhone from '../../../assets/features/iPhone.png';
import iPhoneLarge from '../../../assets/features/iPhoneLarge.png';
import iPhoneMobile from '../../../assets/features/iPhoneMobile.png';
import dots from '../../../assets/features/dots.svg';
import features from '../../../assets/features/features.svg';

const Telemedicine = (): JSX.Element => {
	const classes = useStyles();
	const isDesktop = useMediaQuery('(min-width: 600px)');
	const isLargeDesktop = useMediaQuery('(min-width: 1800px)');

	return (
		<Box id="telemedicine" className={classes.telemedicine}>
			<img src={dots} alt="" className={classes.dots} />
			<Typography variant="h3" className={classes.heading}>
				Telemedicine
			</Typography>

			<Box className={classes.boxWrapper}>
				<Grid container alignItems="center">
					<Grid item xs={12} md={4} data-aos="fade-right">
						<img
							src={
								isLargeDesktop ? iPhoneLarge : isDesktop ? iPhone : iPhoneMobile
							}
							alt="iPhone"
							className={classes.iPhone}
						/>
					</Grid>
					<Grid item xs={12} md={5} data-aos="fade">
						<img src={features} alt="features" className={classes.features} />
					</Grid>
					<Grid item xs={12} md={3} data-aos="fade-left">
						<Typography className={classes.text}>
							Telehealth is the distribution of health-related services and
							information via electronic information and telecommunication
							technologies. It allows long-distance patient and clinician
							contact, care, advice, reminders, education, intervention,
							monitoring, and remote admissions.
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Telemedicine;
