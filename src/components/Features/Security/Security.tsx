import {
	Box,
	Button,
	CircularProgress,
	InputAdornment,
	TextField,
	Typography
} from '@mui/material';
import { useStyles } from './useStyles';
import security from '../../../assets/features/security.png';
import axios from '../../../axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';

const Security = () => {
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
		<Box id="security" className={classes.security}>
			<Toaster position="top-right" reverseOrder={false} />
			<Typography variant="h3" data-aos="fade-up">
				Data Security using Blockchain technology
			</Typography>

			<Box className={classes.imgWrapper} data-aos="fade-up">
				<img src={security} alt="" />
			</Box>

			<Box className={classes.txtWrapper}>
				<Typography className={classes.txt} data-aos="fade-up">
					Your health records and transactions are secured with us! We use
					decentralized ledger technology for data security.
				</Typography>
			</Box>

			<Box className={classes.earlyAccess} data-aos="fade-up">
				<Typography>
					Get early access to our software when we release
				</Typography>

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
			</Box>
		</Box>
	);
};

export default Security;
