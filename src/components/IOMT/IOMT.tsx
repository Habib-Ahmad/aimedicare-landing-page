import { useState } from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { useStyles } from './useStyles';
import stats from '../../assets/features/stats.svg';
import watch1 from '../../assets/features/watch1.png';
import watch2 from '../../assets/features/watch2.png';
import watch3 from '../../assets/features/watch3.png';
import watch4 from '../../assets/features/watch4.png';
import watch5 from '../../assets/features/watch5.png';
import two from '../../assets/features/two.svg';
import arrowLeft from '../../assets/features/arrowLeft.svg';
import arrowRight from '../../assets/features/arrowRight.svg';
import splash from '../../assets/features/splash.svg';

const IOMT = (): JSX.Element => {
	const classes = useStyles();
	const [imageIndex, setImageIndex] = useState(0);

	const watches = [watch1, watch2, watch3, watch4, watch5];

	const handleNext = () => {
		setImageIndex((prevState) => {
			if (prevState === 4) return 0;
			return prevState + 1;
		});
	};

	const handlePrevious = () => {
		setImageIndex((prevState) => {
			if (prevState === 0) return 0;
			return prevState - 1;
		});
	};

	return (
		<Box id="iomt" className={classes.iomt}>
			<Grid
				container
				direction={{ xs: 'column-reverse', md: 'row' }}
				alignItems={{ xs: 'normal', md: 'center' }}
			>
				<Grid item xs={12} md={8}>
					<Box className={classes.slide}>
						<IconButton onClick={handlePrevious} disableRipple>
							<img src={arrowLeft} alt="Arrow-left" className={classes.arrow} />
						</IconButton>
						<Box className={classes.watchWrapper}>
							<img src={stats} alt="" className={classes.stats} />
							<img src={watches[imageIndex]} alt="" className={classes.watch} />
							<img src={splash} alt="Splash" className={classes.splash} />
						</Box>
						<IconButton onClick={handleNext} disableRipple>
							<img
								src={arrowRight}
								alt="Arrow-right"
								className={classes.arrow}
							/>
						</IconButton>
					</Box>
				</Grid>

				<Grid item xs={12} md={4}>
					<Box className={classes.headingWrapper}>
						<img src={two} alt="Two" className={classes.two} />
						<Typography variant="h6">AiMedicare</Typography>
						<Typography variant="h2" sx={{ marginBottom: 2 }}>
							Internet of medical things
						</Typography>
						<Typography className={classes.text}>
							Real time monitoring of health vitals using wearable technology
							with an option of connecting to your Doctors.
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default IOMT;
