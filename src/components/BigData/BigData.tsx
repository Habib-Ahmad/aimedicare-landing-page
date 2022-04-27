import { Box, Grid, Typography } from '@mui/material';
import { useStyles } from './useStyles';
import bigData from '../../assets/features/bigData.png';

const BigData = () => {
	const classes = useStyles();

	return (
		<Grid
			container
			alignItems="center"
			className={classes.container}
			direction={{ xs: 'column-reverse', md: 'row' }}
		>
			<Grid item xs={12} md={6}>
				<img src={bigData} alt="" className={classes.img} data-aos="fade-up" />
			</Grid>

			<Grid item xs={12} md={6}>
				<Box className={classes.headingWrapper}>
					<Typography variant="h6" data-aos="fade-up" sx={{ marginBottom: 1 }}>
						AiMedicare
					</Typography>
					<Typography variant="h2" data-aos="fade-up" sx={{ marginBottom: 2 }}>
						Big data health analytics
					</Typography>
					<Typography data-aos="fade-up" className={classes.text}>
						The congruence of close companions - wearable sensors and
						smartphones - will flood the cloud centers with medical data at an
						unprecedented rate. Gaining knowledge from this data is as important
						as acquiring the information from the body. Patients only benefit
						from wearing sensors when intelligent algorithms process the data
						and offer some actions to take.
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};

export default BigData;
