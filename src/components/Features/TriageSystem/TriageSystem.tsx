import { Box, Typography } from '@mui/material';
import { useStyles } from './useStyles';
import robot from '../../../assets/features/robot.png';
import triage from '../../../assets/features/triage.png';

const TriageSystem = (): JSX.Element => {
	const classes = useStyles();
	return (
		<Box id="ai" className={classes.triage}>
			<Typography variant="h3">
				Triage System Using Artificial Intelligence
			</Typography>

			<Box className={classes.imgWrapper}>
				<img src={robot} alt="" className={classes.robot} />
				<img src={triage} alt="" className={classes.img} />
			</Box>
		</Box>
	);
};

export default TriageSystem;
