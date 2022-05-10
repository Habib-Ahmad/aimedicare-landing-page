import { Box, Button, Grid, Typography, IconButton } from '@mui/material';
import { useStyles } from './useStyles';
import facebook from '../../assets/footer/facebook.svg';
import linkedin from '../../assets/footer/linkedin.svg';
import instagram from '../../assets/footer/instagram.svg';
import whatsapp from '../../assets/footer/whatsapp.svg';
import twitter from '../../assets/footer/twitter.svg';
import Subscribe from '../Subscribe/Subscribe';

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
		name: 'Internet of medical things',
		to: '#iomt'
	},
	{
		name: 'Decentralise ledger technology',
		to: '#bigData'
	},
	{
		name: 'Contact us',
		to: '#contact'
	}
];

const socialLinks = [
	{
		icon: facebook,
		href: ''
	},
	{
		icon: linkedin,
		href: ''
	},
	{
		icon: instagram,
		href: ''
	},
	{
		icon: whatsapp,
		href: ''
	},
	{
		icon: twitter,
		href: ''
	}
];

const Footer = () => {
	const classes = useStyles();

	return (
		<Box sx={{ marginTop: 5 }}>
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
					<Typography sx={{ textAlign: 'justify' }}>
						AiMedicare is a revolutionary healthcare service delivery company
						that uses IOMT, AI, Big data Health analytics, and DLT for patient
						tailored solutions.
					</Typography>
					<Box>
						{socialLinks.map((link, idx) => (
							<IconButton key={idx} href={link.href}>
								<img src={link.icon} alt={link.icon} />
							</IconButton>
						))}
					</Box>
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
					<Subscribe />
				</Grid>
			</Grid>

			<Typography className={classes.copyright}>
				Copyright © 2021 AiMedicare | All Rights Reserved.
			</Typography>
		</Box>
	);
};

export default Footer;
