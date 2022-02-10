import {
	Button,
	Grid,
	IconButton,
	Typography,
	useMediaQuery
} from '@mui/material';
import { useStyles } from './useStyles';
import logo from '../../assets/logo.png';
import { Menu } from '@mui/icons-material';

const NavBar = () => {
	const classes = useStyles();
	const isDesktop = useMediaQuery('(min-width: 600px)');

	return (
		<Grid container className={classes.navbar}>
			<Grid item xs={8} sm={3} sx={{ display: 'flex', alignItems: 'center' }}>
				<img src={logo} alt="aiMedicare" className={classes.logo} />
				<Typography className={classes.logoText}>AiMedicare</Typography>
			</Grid>
			<Grid
				item
				xs={4}
				sm={9}
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-end'
				}}
			>
				{isDesktop && (
					<>
						<Button variant="text" size="medium">
							Home
						</Button>
						<Button variant="text" size="medium">
							About
						</Button>
						<Button variant="text" size="medium">
							Features
						</Button>
						<Button variant="text" size="medium">
							Services
						</Button>
						<Button variant="contained" size="medium">
							Contact us
						</Button>
					</>
				)}
				<IconButton className={classes.menu}>
					<Menu sx={{ color: '#fff', fontSize: '2rem' }} />
				</IconButton>
			</Grid>
		</Grid>
	);
};

export default NavBar;
