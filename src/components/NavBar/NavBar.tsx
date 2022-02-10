import { Button, Grid, Typography } from '@mui/material';
import { useStyles } from './useStyles';
import logo from '../../assets/logo.png';

const NavBar = () => {
	const classes = useStyles();

	return (
		<Grid container className={classes.navbar}>
			<Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: 'center' }}>
				<img src={logo} alt="aiMedicare" className={classes.logo} />
				<Typography className={classes.logoText}>AiMedicare</Typography>
			</Grid>
			<Grid
				item
				xs={12}
				sm={9}
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-end'
				}}
			>
				<Button variant="text" size="medium" disableRipple>
					Home
				</Button>
				<Button variant="text" size="medium" disableRipple>
					About
				</Button>
				<Button variant="text" size="medium" disableRipple>
					Features
				</Button>
				<Button variant="text" size="medium" disableRipple>
					Services
				</Button>
				<Button variant="contained" size="medium" disableRipple>
					Contact us
				</Button>
			</Grid>
		</Grid>
	);
};

export default NavBar;
