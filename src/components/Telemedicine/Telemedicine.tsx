import { Box, Grid, Typography } from '@mui/material';
import { useStyles } from './useStyles';
import iPhone from '../../assets/features/iPhone.png';
import dots from '../../assets/features/dots.svg';
import features from '../../assets/features/features.svg';

const Telemedicine = (): JSX.Element => {
	const classes = useStyles();

	return (
		<Box id="telemedicine" className={classes.telemedicine}>
			<img src={dots} alt="" className={classes.dots} />
			<Typography variant="h3" className={classes.heading}>
				Telemedicine
			</Typography>

			<Box className={classes.boxWrapper}>
				<Grid container alignItems="center">
					<Grid item xs={12} md={4} data-aos="fade-right">
						<img src={iPhone} alt="iPhone" className={classes.iPhone} />
					</Grid>
					<Grid item xs={12} md={5} data-aos="fade">
						<img src={features} alt="features" className={classes.features} />
					</Grid>
					<Grid item xs={12} md={3} data-aos="fade-up">
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
