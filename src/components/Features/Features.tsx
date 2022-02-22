import { Box, Grid, Typography } from '@mui/material';
import { useStyles } from './useStyles';
import blob from '../../assets/features/blob.svg';
import telemedicine from '../../assets/features/telemedicine.svg';
import appleWatch from '../../assets/features/appleWatch.svg';
import ai from '../../assets/features/ai.svg';
import bigData from '../../assets/features/bigData.svg';
import ledger from '../../assets/features/ledger.svg';
import Telemedicine from './Telemedicine/Telemedicine';
import TriageSystem from './TriageSystem/TriageSystem';
import BigData from './BidData/BigData';

const Features = (): JSX.Element => {
	const classes = useStyles();

	return (
		<Box className={classes.features}>
			<img src={blob} alt="" className={classes.blob} />
			<Typography variant="h2" sx={{ marginBottom: 6 }}>
				Features
			</Typography>

			<Grid
				container
				justifyContent="center"
				rowSpacing={10}
				sx={{ padding: '0 15vw' }}
			>
				<Grid item xs={12} sm={6} md={4}>
					<Box className={classes.feature}>
						<img src={telemedicine} alt="" />
						<Typography>Telemedicine</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Box className={classes.feature}>
						<img src={appleWatch} alt="" />
						<Typography>Internet of medical things (IOMT)</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Box className={classes.feature}>
						<img src={ai} alt="" />
						<Typography>Artificial Inteligence</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Box className={classes.feature}>
						<img src={bigData} alt="" />
						<Typography>Big Data health analytics</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Box className={classes.feature}>
						<img src={ledger} alt="" />
						<Typography>Decentralized ledger Technology</Typography>
					</Box>
				</Grid>
			</Grid>

			<Telemedicine />
			<TriageSystem />
			<BigData />
		</Box>
	);
};

export default Features;
