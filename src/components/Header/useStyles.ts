import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import background from '../../assets/header/background.png';

export const useStyles = makeStyles((theme: Theme) => ({
	header: {
		backgroundImage: `url(${background})`,
		height: '98vh',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		position: 'relative',
		imageRendering: 'crisp-edges'
	},
	heading: {
		'&.MuiTypography-root': {
			paddingTop: theme.spacing(17),
			paddingLeft: '5vw',
			paddingRight: '5vw',
			width: '60%',
			color: '#fff',
			textShadow: '2px 2px 10px rgba(0,0,0,.2)',
			lineHeight: '4rem',

			[theme.breakpoints.down('md')]: {
				lineHeight: '2.5rem',
				width: '80%'
			},

			[theme.breakpoints.down('sm')]: {
				width: '100%'
			}
		}
	},
	robot: {
		position: 'absolute',
		bottom: '-7%',
		left: '3%',
		width: 300,

		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},
	smallRobot: {
		display: 'none',

		[theme.breakpoints.down('sm')]: {
			display: 'block',
			position: 'absolute',
			bottom: '-6.2%',
			left: '3%',
			width: 300
		}
	},
	btn: {
		position: 'absolute',
		bottom: '-12%',
		right: '5%',
		width: 150,

		[theme.breakpoints.down('sm')]: {
			width: 100,
			right: '2%'
		}
	}
}));
