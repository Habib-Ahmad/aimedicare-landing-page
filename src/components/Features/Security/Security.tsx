import { Box, Typography } from '@mui/material';
import { useStyles } from './useStyles';
import security from '../../../assets/features/security.png';

const Security = () => {
	const classes = useStyles();

	return (
		<Box id="security" className={classes.security}>
			<Typography variant="h3">
				Data Security using Blockchain technology
			</Typography>

			<Box className={classes.txtWrapper}>
				<Typography className={classes.txt}>
					Your health records and transactions are secured with us! We use
					decentralized ledger technology for data security.
				</Typography>
			</Box>

			<Box className={classes.imgWrapper}>
				<img src={security} alt="" />
			</Box>
		</Box>
	);
};

export default Security;
