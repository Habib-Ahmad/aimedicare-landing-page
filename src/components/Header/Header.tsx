import { Box, Typography } from '@mui/material';
import { useStyles } from './useStyles';

const Header = () => {
	const classes = useStyles();
	return (
		<Box className={classes.header}>
			<Typography variant="h1" className={classes.heading}>
				The future of medical health systems
			</Typography>
		</Box>
	);
};

export default Header;
