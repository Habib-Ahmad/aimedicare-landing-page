import { Box, Grid, Typography } from '@mui/material';
import { useStyles } from './useStyles';
import triage from '../../assets/features/triage.png';
import three from '../../assets/features/three.svg';

const TriageSystem = (): JSX.Element => {
	const classes = useStyles();

	return (
		<Grid
			id="triage"
			container
			className={classes.container}
			alignItems="center"
		>
			<Grid item xs={12} md={4}>
				<Box className={classes.headingWrapper}>
					<img src={three} alt="Three" className={classes.three} />
					<Typography variant="h6" data-aos="fade-up" sx={{ marginBottom: 1 }}>
						AiMedicare
					</Typography>
					<Typography variant="h2" data-aos="fade-up" sx={{ marginBottom: 2 }}>
						Triage yourself
					</Typography>
					<Typography data-aos="fade-up" className={classes.text}>
						Patients' needs can be identified expeditiously and appropriate care
						can be arranged, Using our technology, it is easy to accurately
						identify those who can self-treat, qualify for teleconsultation,
						consult a doctor, or seek immediate medical treatment.
					</Typography>
				</Box>
			</Grid>

			<Grid item xs={12} md={8}>
				<img src={triage} alt="" data-aos="fade-up" className={classes.img} />
			</Grid>
		</Grid>
	);
};

export default TriageSystem;
