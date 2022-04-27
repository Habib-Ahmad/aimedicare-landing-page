import { Box, Typography } from '@mui/material';
import arrow from '../../assets/features/arrow.svg';
import { useStyles } from './useStyles';
import Subscribe from '../Subscribe/Subscribe';

const EarlyAccess = () => {
	const classes = useStyles();

	return (
		<Box className={classes.container}>
			<Box className={classes.header}>
				<Typography variant="h2">Get early access</Typography>
				<img src={arrow} alt="" className={classes.img} />
			</Box>

			<Box className={classes.inputWrapper}>
				<Subscribe />
			</Box>
		</Box>
	);
};

export default EarlyAccess;
