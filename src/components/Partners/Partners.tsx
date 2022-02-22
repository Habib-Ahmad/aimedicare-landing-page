import { Box, Typography } from '@mui/material';
import { useStyles } from './useStyles';
import algorizmi from '../../assets/partners/algorizmi.png';
import nitda from '../../assets/partners/nitda.png';
import mira from '../../assets/partners/mira.png';
import fasta from '../../assets/partners/fasta.png';
import polaris from '../../assets/partners/polaris.png';
import ncair from '../../assets/partners/ncair.png';

import miccai from '../../assets/partners/miccai.png';
import fthg from '../../assets/partners/fthg.png';
import primus from '../../assets/partners/primus.png';
import switchbox from '../../assets/partners/switchbox.png';
import richfield from '../../assets/partners/richfield.png';
import surgical from '../../assets/partners/surgical.png';

const Partners = () => {
	const classes = useStyles();

	return (
		<Box className={classes.partners}>
			<Typography variant="h2" sx={{ marginBottom: 5 }}>
				Our Partners
			</Typography>

			<Box className={classes.logoWrapper1}>
				<img src={algorizmi} alt="" />
				<img src={nitda} alt="" />
				<img src={mira} alt="" />
				<img src={fasta} alt="" />
				<img src={polaris} alt="" />
				<img src={ncair} alt="" />
				<img src={algorizmi} alt="" />
				<img src={nitda} alt="" />
				<img src={mira} alt="" />
				<img src={fasta} alt="" />
				<img src={polaris} alt="" />
				<img src={ncair} alt="" />
			</Box>

			<Box className={classes.logoWrapper2}>
				<img src={miccai} alt="" />
				<img src={fthg} alt="" />
				<img src={primus} alt="" />
				<img src={switchbox} alt="" />
				<img src={richfield} alt="" />
				<img src={surgical} alt="" />
				<img src={miccai} alt="" />
				<img src={fthg} alt="" />
				<img src={primus} alt="" />
				<img src={switchbox} alt="" />
				<img src={richfield} alt="" />
				<img src={surgical} alt="" />
			</Box>
		</Box>
	);
};

export default Partners;
