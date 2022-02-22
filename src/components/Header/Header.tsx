import { Box, Typography } from '@mui/material';
import { useStyles } from './useStyles';
import robot from '../../assets/header/robot.png';
import smallRobot from '../../assets/header/smallRobot.png';
import btn from '../../assets/header/btn.svg';

const Header = (): JSX.Element => {
	const classes = useStyles();
	return (
		<Box id="home" className={classes.header}>
			<img src={robot} alt="" className={classes.robot} />
			<img src={smallRobot} alt="" className={classes.smallRobot} />
			<img
				src={btn}
				alt=""
				className={classes.btn}
				onClick={() => console.log('working')}
			/>
			<Typography variant="h1" className={classes.heading} data-aos="fade-up">
				The future of medical health systems
			</Typography>
		</Box>
	);
};

export default Header;
