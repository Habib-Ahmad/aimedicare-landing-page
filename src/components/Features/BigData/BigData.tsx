import { Box, Grid, Typography } from '@mui/material';
import { useStyles } from './useStyles';
import bigData from '../../../assets/features/bigData.png';
import dots from '../../../assets/features/dots2.svg';
import blob from '../../../assets/features/blob2.svg';

const BigData = () => {
	const classes = useStyles();

	return (
		<Box className={classes.bigData}>
			<img src={dots} alt="" className={classes.dots} />
			<img src={blob} alt="" className={classes.blob} />
			<Typography variant="h3" data-aos="fade-up" sx={{ padding: '0 5vw' }}>
				Big Data Health Analysis
			</Typography>

			<Grid container alignItems="center">
				<Grid item xs={12} md={6}>
					<Box data-aos="fade-up">
						<img src={bigData} alt="" className={classes.img} />
					</Box>
				</Grid>

				<Grid item xs={12} md={6}>
					<Typography className={classes.txt} data-aos="fade-up">
						The congruence of close companions - wearable sensors and
						smartphones - will flood the cloud centers with medical data at an
						unprecedented rate. Gaining knowledge from this data is as important
						as acquiring the information from the body. Patients only benefit
						from wearing sensors when intelligent algorithms process the data
						and offer some actions to take.
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};

export default BigData;
