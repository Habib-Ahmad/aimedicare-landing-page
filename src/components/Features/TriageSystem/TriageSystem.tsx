import { Box, Typography } from '@mui/material';
import { useStyles } from './useStyles';
import triage from '../../../assets/features/triage.png';

const TriageSystem = (): JSX.Element => {
	const classes = useStyles();
	return (
		<Box className={classes.triage}>
			<Typography variant="h3">
				Triage System Using Artificial Intelligence
			</Typography>

			<img src={triage} alt="" className={classes.img} />
		</Box>
	);
};

export default TriageSystem;
