import {
	Box,
	Typography,
	IconButton,
	TextField,
	InputAdornment,
	Button,
	CircularProgress
} from '@mui/material';
import { useStyles } from './useStyles';
import robot from '../../assets/header/robot.png';
import dialog from '../../assets/header/dialog.svg';
import smallRobot from '../../assets/header/smallRobot.png';
import smallDialog from '../../assets/header/smallDialog.svg';
import btn from '../../assets/header/btn.svg';
import Particles from '../Particles/Particles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import axios from '../../axios';

const Header = (): JSX.Element => {
	const classes = useStyles();

	const notify = () => toast.success('You have successfuly subscribed');

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
	};

	return (
		<Box id="home" className={classes.header}>
			<Toaster position="top-right" reverseOrder={false} />
			<Box className={classes.particles}>
				<Particles />
			</Box>

			<img src={robot} alt="" className={classes.robot} />
			<img src={dialog} alt="" className={classes.dialog} />
			<img src={smallRobot} alt="" className={classes.smallRobot} />
			<img src={smallDialog} alt="" className={classes.smallDialog} />

			<IconButton href="#about" className={classes.btn}>
				<img src={btn} alt="" style={{ width: '100%' }} />
			</IconButton>

			<Typography variant="h1" className={classes.heading} data-aos="fade-up">
				The future of medical health systems
			</Typography>
			<Typography className={classes.subHeading} data-aos="fade-up">
				Let technology work for you
			</Typography>
			<Typography className={classes.formHeader} data-aos="fade-up">
				Get early access to our software when we release
			</Typography>

			<Box className={classes.subscribeWrapper}>
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
								data-aos="fade-up"
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

export default Header;
