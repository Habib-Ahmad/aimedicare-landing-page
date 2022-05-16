import { Box, Button, Typography } from '@mui/material';
import underline from '../../assets/header/underline.svg';
import play from '../../assets/header/play.svg';
import arrow from '../../assets/header/arrow.svg';
import eski from '../../assets/header/eski.gif';
import { useStyles } from './useStyles';

const Header = (): JSX.Element => {
	const classes = useStyles();

	return (
		<Box className={classes.header}>
			<img src={arrow} alt="Arrow" className={classes.arrow} />

			<Box>
				<Typography className={classes.heading}>
					let{' '}
					<span>
						technology
						<img src={underline} alt="Underline" />
					</span>{' '}
					work for you.
				</Typography>
				<Typography className={classes.subHeading}>
					AiMedicare is building a revolutionary healthcare service delivery
					technology across the African continent.
				</Typography>

				<img src={eski} alt="Eski" className={classes.eski} />

				<Box className={classes.btnWrapper}>
					<Button variant="contained" className={classes.btn1} href="#features">
						Get Started
					</Button>
					<Button variant="text">
						<img src={play} alt="Play" />
						<Typography
							sx={{ color: '#282C4B', marginLeft: '10px', fontWeight: '500' }}
						>
							Watch Video
						</Typography>
					</Button>
				</Box>
			</Box>

			<img src={eski} alt="Eski" className={classes.desktopEski} />
		</Box>
	);
};

export default Header;
