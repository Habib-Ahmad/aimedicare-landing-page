import {
	Box,
	Button,
	Grid,
	InputAdornment,
	TextField,
	Typography
} from '@mui/material';
import { useStyles } from './useStyles';

const links = [
	{
		name: 'Home',
		to: '#home'
	},
	{
		name: 'About us',
		to: '#about'
	},
	{
		name: 'Features',
		to: '#features'
	},
	{
		name: 'Telemedicine',
		to: '#telemedicine'
	},
	{
		name: 'Internet of medical things',
		to: '#iomt'
	},
	{
		name: 'Artificial intelligence',
		to: '#ai'
	},
	{
		name: 'Decentralise ledger technology',
		to: '#security'
	}
];

const Footer = () => {
	const classes = useStyles();

	return (
		<Box sx={{ marginTop: 10 }}>
			<Grid container className={classes.footer} rowSpacing={5}>
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
					className={classes.gridItem}
					data-aos="fade-up"
				>
					<Typography className={classes.heading}>AiMedicare</Typography>
					<Typography className={classes.body}>
						AiMedicare is a revolutionary healthcare service delivery company
						that uses IOMT, AI, Big data Health analytics, and DLT for patient
						tailored solutions.
					</Typography>
				</Grid>

				<Grid
					item
					xs={12}
					sm={6}
					md={4}
					className={classes.gridItem}
					data-aos="fade-up"
				>
					<Typography className={classes.heading}>Useful Links</Typography>
					<Box className={classes.links}>
						{links.map((link) => (
							<Button
								key={link.name}
								variant="text"
								href={link.to}
								className={classes.btn}
							>
								{'>> '}
								{link.name}
							</Button>
						))}
					</Box>
				</Grid>

				<Grid
					item
					xs={12}
					md={4}
					className={classes.gridItem}
					data-aos="fade-up"
				>
					<Typography>Subscribe to our newsletter</Typography>
					<TextField
						className={classes.subscribe}
						placeholder="Enter your email"
						fullWidth
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<Button className={classes.subscribeBtn}>Submit</Button>
								</InputAdornment>
							)
						}}
					/>
				</Grid>
			</Grid>

			<Typography className={classes.copyright}>
				Copyright © 2021 AiMedicare | All Rights Reserved.
			</Typography>
		</Box>
	);
};

export default Footer;
