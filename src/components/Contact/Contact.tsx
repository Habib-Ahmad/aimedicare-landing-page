import {
	Box,
	Typography,
	TextField,
	Button,
	CircularProgress
} from '@mui/material';
import { useStyles } from './useStyles';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
	const classes = useStyles();

	const handleSubmit = async ({
		firstName,
		lastName,
		email,
		phone,
		message
	}: {
		firstName: string;
		lastName: string;
		email: string;
		phone: string;
		message: string;
	}) => {
		console.log(firstName, lastName, email, phone, message);
	};

	return (
		<Box id="contact" className={classes.contact}>
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
					phone: '',
					message: ''
				}}
				validationSchema={Yup.object().shape({
					firstName: Yup.string().required('First Name is required'),
					lastName: Yup.string().required('Last Name is required'),
					email: Yup.string()
						.trim()
						.required('E-mail is required')
						.email('E-mail is not valid')
				})}
				onSubmit={handleSubmit}
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
								name="phone"
								helperText={touched.phone ? errors.phone : ''}
								error={touched.phone && Boolean(errors.phone)}
								value={values.phone}
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
