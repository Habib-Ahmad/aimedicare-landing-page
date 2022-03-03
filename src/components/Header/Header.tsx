import { Box, Typography, IconButton } from '@mui/material';
import { useStyles } from './useStyles';
import robot from '../../assets/header/robot.png';
import dialog from '../../assets/header/dialog.svg';
import smallRobot from '../../assets/header/smallRobot.png';
import smallDialog from '../../assets/header/smallDialog.svg';
import btn from '../../assets/header/btn.svg';

const Header = (): JSX.Element => {
	const classes = useStyles();
	return (
		<Box id="home" className={classes.header}>
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
		</Box>
	);
};

export default Header;
