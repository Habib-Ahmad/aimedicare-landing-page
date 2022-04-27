import {
	Box,
	Button,
	CircularProgress,
	InputAdornment,
	TextField
} from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import axios from '../../axios';
import { useStyles } from './useStyles';

const Subscribe = () => {
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
		<Box>
			<Toaster position="top-right" reverseOrder={false} />
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
							placeholder="Enter your email address"
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
												<CircularProgress sx={{ color: '#fff' }} />
											) : (
												'Subscribe'
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
	);
};

export default Subscribe;
