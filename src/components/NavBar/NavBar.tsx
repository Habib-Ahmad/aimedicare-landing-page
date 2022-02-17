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
import { Menu } from '@mui/icons-material';

const menuItems = [
	{
		name: 'Home',
		to: '/'
	},
	{
		name: 'About',
		to: '/'
	},
	{
		name: 'Features',
		to: '/'
	},
	{
		name: 'Services',
		to: '/'
	},
	{
		name: 'Contact us',
		to: '/'
	}
];

const renderMenuItems = () => {
	return menuItems.map((item) => (
		<Button key={item.name} variant="text" size="medium" href={item.to}>
			{item.name}
		</Button>
	));
};

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

	return (
		<Grid container className={classes.navbar}>
			<Grid item xs={8} sm={5}>
				<img src={logo} alt="aiMedicare" className={classes.logo} />
				<Typography className={classes.logoText}>AiMedicare</Typography>
			</Grid>
			<Grid item xs={4} sm={7} gap={3}>
				{isDesktop && (
					<Box className={classes.menuItems}>{renderMenuItems()}</Box>
				)}

				<IconButton className={classes.menu} onClick={toggleDrawer(true)}>
					<Menu sx={{ color: '#fff', fontSize: '2rem' }} />
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
