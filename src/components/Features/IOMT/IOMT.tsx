import { useState } from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { useStyles } from './useStyles';
import watchWithStats from '../../../assets/features/watchWithStats.png';
import watch1 from '../../../assets/features/watch1.png';
import btn from '../../../assets/features/btn.svg';
import active from '../../../assets/features/active.svg';

const IOMT = () => {
	const classes = useStyles();
	const [activeWatch, setActiveWatch] = useState<number>(0);
	const [watches, setWatches] = useState([
		watch1,
		watch1,
		watch1,
		watch1,
		watch1
	]);

	const handlePrev = () => {
		const prevWatch =
			activeWatch - 1 >= 0 ? activeWatch - 1 : watches.length - 1;
		setActiveWatch(prevWatch);

		const newWatches = [...watches];
		newWatches.forEach((watch, idx) => {
			if (idx === 0) {
				newWatches.splice(idx, 1);
				newWatches.push(watch);
			}
		});
		setWatches(newWatches);
	};

	const handleNext = () => {
		const nextWatch = activeWatch + 1 < watches.length ? activeWatch + 1 : 0;
		setActiveWatch(nextWatch);

		const newWatches = [...watches];
		newWatches.forEach((watch, idx) => {
			if (idx === newWatches.length - 1) {
				newWatches.splice(idx, 1);
				newWatches.unshift(watch);
			}
		});
		setWatches(newWatches);
	};

	return (
		<Box className={classes.iomt}>
			<Typography variant="h3">Internet of Medical Things</Typography>
			<Grid container alignItems="center" justifyContent="center">
				<Grid item xs={12} md={8}>
					<Box className={classes.leftWrapper}>
						{/* <img src={stats} alt="" style={{ width: 200 }} /> */}
						<img src={watchWithStats} alt="" style={{ width: 700 }} />
						<Typography>
							Real time monitoring of health vitals using wearable technology
							with an option of connecting to your Doctor
						</Typography>
					</Box>
				</Grid>

				<Grid
					container
					item
					xs={12}
					md={4}
					alignItems="center"
					justifyContent="space-evenly"
				>
					<Grid item xs={12} md={2}>
						<Box className={classes.watchWrapper}>
							{watches.map((watch, idx) => (
								<img
									key={idx}
									src={watch}
									alt=""
									className={
										idx === 2
											? classes.centerWatch
											: idx === 1 || idx === 3
											? classes.middleWatch
											: classes.endWatch
									}
								/>
							))}
						</Box>
					</Grid>
					<Grid item xs={12} md={2}>
						<Box className={classes.watchWrapper}>
							<IconButton onClick={handlePrev}>
								<img src={btn} alt="" style={{ width: 8 }} />
							</IconButton>

							<img src={active} alt="" style={{ margin: 20, width: 30 }} />

							<IconButton onClick={handleNext}>
								<img src={btn} alt="" style={{ width: 8 }} />
							</IconButton>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default IOMT;
