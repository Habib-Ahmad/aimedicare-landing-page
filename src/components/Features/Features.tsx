import { Box, Grid, Typography } from '@mui/material';
import { useStyles } from './useStyles';
import blob from '../../assets/features/blob.svg';
import triageBlob from '../../assets/features/triageBlob.svg';
import telemedicine from '../../assets/features/telemedicine.svg';
import appleWatch from '../../assets/features/appleWatch.svg';
import ai from '../../assets/features/ai.svg';
import bigData from '../../assets/features/bigData.svg';
import ledger from '../../assets/features/ledger.svg';
import Telemedicine from './Telemedicine/Telemedicine';
import TriageSystem from './TriageSystem/TriageSystem';
import BigData from './BigData/BigData';
import Security from './Security/Security';
import IOMT from './IOMT/IOMT';

const Features = (): JSX.Element => {
	const classes = useStyles();

	return (
		<Box id="features" className={classes.features}>
			<img src={blob} alt="" className={classes.blob} />
			<img src={triageBlob} alt="" className={classes.triageBlob1} />

			<Typography variant="h2" sx={{ marginBottom: 6 }} data-aos="fade-up">
				Features
			</Typography>

			<Grid
				container
				justifyContent="center"
				rowSpacing={10}
				sx={{ padding: '0 10vw' }}
			>
				<Grid item xs={6} md={4} data-aos="fade-up" data-aos-delay="50">
					<Box className={classes.feature}>
						<img src={telemedicine} alt="" />
						<Typography>Telemedicine</Typography>
					</Box>
				</Grid>
				<Grid item xs={6} md={4} data-aos="fade-up" data-aos-delay="100">
					<Box className={classes.feature}>
						<img src={appleWatch} alt="" />
						<Typography>Internet of medical things (IOMT)</Typography>
					</Box>
				</Grid>
				<Grid item xs={6} md={4} data-aos="fade-up" data-aos-delay="200">
					<Box className={classes.feature}>
						<img src={ai} alt="" />
						<Typography>Artificial Inteligence</Typography>
					</Box>
				</Grid>
				<Grid item xs={6} md={4} data-aos="fade-up" data-aos-delay="300">
					<Box className={classes.feature}>
						<img src={bigData} alt="" />
						<Typography>Big Data health analytics</Typography>
					</Box>
				</Grid>
				<Grid item xs={6} md={4} data-aos="fade-up" data-aos-delay="400">
					<Box className={classes.feature}>
						<img src={ledger} alt="" />
						<Typography>Decentralized ledger Technology</Typography>
					</Box>
				</Grid>
			</Grid>

			<Telemedicine />
			<IOMT />
			<TriageSystem />
			<BigData />
			<Security />
		</Box>
	);
};

export default Features;
