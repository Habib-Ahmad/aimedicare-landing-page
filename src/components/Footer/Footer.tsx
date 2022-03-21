import {
	Box,
	Button,
	Grid,
	InputAdornment,
	TextField,
	Typography,
	CircularProgress
} from '@mui/material';
import { useStyles } from './useStyles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import axios from '../../axios';

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

	const notify = () => toast.success('You have successfuly subscribed');

	const handleSubmit = (
		values: { email: string },
		setSubmitting: (arg0: boolean) => void
	) => {
		try {
			axios.post('/news-letters', { email: values.email }).then(() => {
				setSubmitting(false);
				notify();
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Box sx={{ marginTop: 20 }}>
			<Toaster position="top-right" reverseOrder={false} />

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
					<Formik
						initialValues={{
							email: ''
						}}
						validationSchema={Yup.object().shape({
							email: Yup.string()
								.trim()
								.required('Please enter you email')
								.email('E-mail is not valid')
						})}
						onSubmit={(values, { setSubmitting }) =>
							handleSubmit(values, setSubmitting)
						}
					>
						{({
							handleSubmit,
							handleChange,
							values,
							touched,
							errors,
							isSubmitting
						}) => (
							<form onSubmit={handleSubmit} noValidate>
								<TextField
									className={classes.subscribe}
									placeholder="Enter your email"
									name="email"
									type="email"
									fullWidth
									value={values.email}
									onChange={handleChange}
									helperText={touched.email ? errors.email : ''}
									error={touched.email && Boolean(errors.email)}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<Button type="submit" className={classes.subscribeBtn}>
													{isSubmitting ? (
														<CircularProgress sx={{ color: 'white' }} />
													) : (
														'Submit'
													)}
												</Button>
											</InputAdornment>
										)
									}}
								/>
							</form>
						)}
					</Formik>
				</Grid>
			</Grid>

			<Typography className={classes.copyright}>
				Copyright © 2021 AiMedicare | All Rights Reserved.
			</Typography>
		</Box>
	);
};

export default Footer;
