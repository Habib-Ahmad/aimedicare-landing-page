import { Box, Typography } from '@mui/material';
import { useStyles } from './useStyles';
import telemedicine from '../../assets/features/telemedicine.svg';
import iomt from '../../assets/features/iomt.svg';
import ai from '../../assets/features/ai.svg';
import bigData from '../../assets/features/bigData.svg';
import ledger from '../../assets/features/ledger.svg';
const Features = (): JSX.Element => {
	const classes = useStyles();

	return (
		<Box id="features" className={classes.features}>
			<Box className={classes.headingWrapper}>
				<Typography variant="h6" data-aos="fade-up" sx={{ marginBottom: 1 }}>
					AiMedicare
				</Typography>
				<Typography variant="h2" data-aos="fade-up" sx={{ marginBottom: 2 }}>
					Our features
				</Typography>
				<Typography data-aos="fade-up" sx={{ color: '#747582' }}>
					We will bring the breathe of our experience and industry knowledge to
					help you succeed
				</Typography>
			</Box>

			<Box className={classes.featureWrapper} data-aos="fade-up">
				<Box className={classes.feature}>
					<img src={telemedicine} alt="telemedicine" />
					<Typography>Telemedicine</Typography>
				</Box>
				<Box className={classes.feature}>
					<img src={iomt} alt="iomt" />
					<Typography>Internet of medical things</Typography>
				</Box>
				<Box className={classes.feature}>
					<img src={ai} alt="ai" />
					<Typography>Artificial inteligence</Typography>
				</Box>
				<Box className={classes.feature}>
					<img src={bigData} alt="bigData" />
					<Typography>Big data health analytics</Typography>
				</Box>
				<Box className={classes.feature}>
					<img src={ledger} alt="ledger" />
					<Typography>Decentralized ledger technology</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default Features;
