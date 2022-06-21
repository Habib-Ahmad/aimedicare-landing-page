import { useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import underline from '../../assets/header/underline.svg';
import play from '../../assets/header/play.svg';
import arrow from '../../assets/header/arrow.svg';
import eski from '../../assets/header/eski.gif';
import { useStyles } from './useStyles';

const Header = (): JSX.Element => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

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
					<Button
						variant="contained"
						className={classes.btn1}
						href="#earlyAccess"
					>
						Get Started
					</Button>
					<Button onClick={handleOpen} variant="text" className={classes.btn2}>
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

			<Modal open={open} onClose={handleClose}>
				<Box
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)'
					}}
				>
					<video
						width="auto"
						height="auto"
						style={{ maxWidth: '90vw' }}
						controls
						autoPlay
					>
						<source
							src="https://firebasestorage.googleapis.com/v0/b/aimedicare-3fc0d.appspot.com/o/intro.mp4?alt=media&token=334adbde-d7da-47ca-9011-04f372f3b76d"
							type="video/mp4"
						></source>
					</video>
				</Box>
			</Modal>
		</Box>
	);
};

export default Header;
