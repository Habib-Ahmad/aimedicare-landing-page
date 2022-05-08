import { useState } from 'react';
import {
	Box,
	Button,
	Grid,
	IconButton,
	SwipeableDrawer,
	Typography,
	useMediaQuery
} from '@mui/material';
import { useStyles } from './useStyles';
import logo from '../../assets/logo.svg';
import logo2 from '../../assets/logo2.svg';
import { Menu } from '@mui/icons-material';

const menuItems = [
	{
		name: 'Home',
		to: '#home'
	},
	{
		name: 'Features',
		to: '#features'
	},
	{
		name: 'About',
		to: '#about'
	},
	{
		name: 'Contact us',
		to: '#contact'
	}
];

const NavBar = (): JSX.Element => {
	const classes = useStyles();
	const [displayDrawer, setDisplayDrawer] = useState(false);
	const isDesktop = useMediaQuery('(min-width: 900px)');

	const toggleDrawer =
		(open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event &&
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return;
			}

			setDisplayDrawer(open);
		};

	const renderMenuItems = () => {
		return menuItems.map((item) => (
			<Button
				key={item.name}
				variant="text"
				href={item.to}
				onClick={toggleDrawer(false)}
			>
				{item.name}
			</Button>
		));
	};

	return (
		<Grid id="home" container className={classes.navbar} alignItems="center">
			<Grid item xs={10} md={5} data-aos="fade-down">
				<Box className={classes.logoWrapper}>
					<img
						src={isDesktop ? logo : logo2}
						alt="aiMedicare"
						className={classes.logo}
					/>
					<Typography className={classes.logoText}>AiMedicare</Typography>
				</Box>
			</Grid>
			<Grid item xs={2} md={7} columnSpacing={8} data-aos="fade-down">
				{isDesktop && (
					<Box className={classes.menuItems}>{renderMenuItems()}</Box>
				)}

				<IconButton className={classes.menu} onClick={toggleDrawer(true)}>
					<Menu sx={{ color: '#0c9093', fontSize: '2rem' }} />
				</IconButton>
				<SwipeableDrawer
					anchor="right"
					open={displayDrawer}
					onClose={toggleDrawer(false)}
					onOpen={toggleDrawer(true)}
					className={classes.drawer}
				>
					{renderMenuItems()}
				</SwipeableDrawer>
			</Grid>
		</Grid>
	);
};

export default NavBar;
