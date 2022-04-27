import { Box, Grid, Typography } from '@mui/material';
import { useStyles } from './useStyles';
import security from '../../assets/security/security.png';

const Security = () => {
	const classes = useStyles();

	return (
		<Grid id="security" container className={classes.container}>
			<Grid item xs={12} md={4}>
				<Box className={classes.headingWrapper}>
					<Typography variant="h6" data-aos="fade-up" sx={{ marginBottom: 1 }}>
						AiMedicare
					</Typography>
					<Typography variant="h2" data-aos="fade-up" sx={{ marginBottom: 2 }}>
						Data Security using Blockchain technology
					</Typography>
					<Typography data-aos="fade-up" sx={{ color: '#747582' }}>
						Your health records and transactions are secured with us! We use
						decentralized ledger technology for data security.
					</Typography>
				</Box>
			</Grid>

			<Grid item xs={12} md={8}>
				<img src={security} alt="" data-aos="fade-up" className={classes.img} />
			</Grid>
		</Grid>
	);
};

export default Security;

/* 
const handleSubmit = (
values: { email: string },
setSubmitting: (arg0: boolean) => void
) => {
	try {
		axios.post('/pre-register', { email: values.email }).then(() => {
			setSubmitting(false);
			notify();
		});
	} catch (error) {
		console.error(error);
	}
	
	const notify = () => toast.success('You have successfuly subscribed');
	
	
<Box className={classes.earlyAccess} data-aos="fade-up">
};
<Toaster position="top-right" reverseOrder={false} />
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
</Box> */
