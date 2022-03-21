import {
	Box,
	Typography,
	TextField,
	Checkbox,
	Button,
	CircularProgress,
	FormGroup,
	FormControlLabel
} from '@mui/material';
import { useStyles } from './useStyles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from '../../axios';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
	const classes = useStyles();

	const notify = () =>
		toast.success(
			'Thank you for contacting us, we will get back to you shortly'
		);

	const handleSubmit = async (
		values: {
			firstName: string;
			lastName: string;
			email: string;
			phoneNumber: string;
			message: string;
			receiveEmails: boolean;
		},
		setSubmitting: (arg0: boolean) => void
	) => {
		try {
			axios.post('/contact', values).then(() => {
				setSubmitting(false);
				notify();
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Box id="contact" className={classes.contact}>
			<Toaster position="top-right" reverseOrder={false} />

			<Typography variant="h2" data-aos="fade-up">
				Get In Touch
			</Typography>

			<Typography sx={{ textAlign: 'center', marginTop: 3 }} data-aos="fade-up">
				Do you provide any medical services or want to partner?
			</Typography>

			<Typography className={classes.txt} data-aos="fade-up">
				Fields marked with an asterisk (*) are required.
			</Typography>

			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					phoneNumber: '',
					message: '',
					receiveEmails: false
				}}
				validationSchema={Yup.object().shape({
					firstName: Yup.string().required('First Name is required'),
					lastName: Yup.string().required('Last Name is required'),
					email: Yup.string()
						.trim()
						.required('E-mail is required')
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
					<form onSubmit={handleSubmit} noValidate data-aos="fade-up">
						<Box className={classes.inputWrapper}>
							<TextField
								variant="outlined"
								label="First Name"
								fullWidth
								required
								name="firstName"
								helperText={touched.firstName ? errors.firstName : ''}
								error={touched.firstName && Boolean(errors.firstName)}
								value={values.firstName}
								onChange={handleChange}
							/>

							<Box sx={{ width: 50, height: 16 }} />

							<TextField
								variant="outlined"
								label="Last Name"
								fullWidth
								required
								name="lastName"
								helperText={touched.lastName ? errors.lastName : ''}
								error={touched.lastName && Boolean(errors.lastName)}
								value={values.lastName}
								onChange={handleChange}
							/>
						</Box>

						<Box className={classes.inputWrapper}>
							<TextField
								variant="outlined"
								label="E-mail"
								fullWidth
								required
								name="email"
								helperText={touched.email ? errors.email : ''}
								error={touched.email && Boolean(errors.email)}
								value={values.email}
								onChange={handleChange}
							/>

							<Box sx={{ width: 50, height: 16 }} />

							<TextField
								variant="outlined"
								label="Phone Number"
								fullWidth
								name="phoneNumber"
								helperText={touched.phoneNumber ? errors.phoneNumber : ''}
								error={touched.phoneNumber && Boolean(errors.phoneNumber)}
								value={values.phoneNumber}
								onChange={handleChange}
							/>
						</Box>

						<TextField
							variant="outlined"
							label="Message"
							fullWidth
							multiline
							name="message"
							helperText={touched.message ? errors.message : ''}
							error={touched.message && Boolean(errors.message)}
							value={values.message}
							onChange={handleChange}
						/>

						<FormGroup>
							<FormControlLabel
								control={
									<Checkbox
										checked={values.receiveEmails}
										onChange={handleChange}
										name="receiveEmails"
									/>
								}
								label="Subscribe to our news letter"
							/>
						</FormGroup>

						<Button
							type="submit"
							variant="contained"
							size="large"
							sx={{
								display: 'block',
								margin: '10px auto 10px 0',
								height: '40px'
							}}
							className={classes.btn}
						>
							{isSubmitting ? (
								<CircularProgress sx={{ width: '20px', color: 'white' }} />
							) : (
								'Submit'
							)}
						</Button>
					</form>
				)}
			</Formik>
		</Box>
	);
};

export default Contact;
