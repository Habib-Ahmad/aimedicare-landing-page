import { Box, Typography, useMediaQuery } from '@mui/material';
import { useStyles } from './useStyles';
import robot from '../../../assets/features/robot.png';
import robotLarge from '../../../assets/features/robotLarge.png';
import triage from '../../../assets/features/triage.png';

const TriageSystem = (): JSX.Element => {
	const classes = useStyles();
	const isDesktop = useMediaQuery('(min-width: 600px)');
	const isLargeDesktop = useMediaQuery('(min-width: 1800px)');

	return (
		<Box id="ai" className={classes.triage}>
			<Typography variant="h3" data-aos="fade-up">
				Triage System Using Artificial Intelligence
			</Typography>

			<Box className={classes.imgWrapper} data-aos="fade-up">
				<img
					src={isLargeDesktop ? robotLarge : isDesktop ? robot : robot}
					alt=""
					className={classes.robot}
				/>
				<img src={triage} alt="" className={classes.img} />
			</Box>
		</Box>
	);
};

export default TriageSystem;
