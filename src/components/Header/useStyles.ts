import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import background from '../../assets/header/background.png';

export const useStyles = makeStyles((theme: Theme) => ({
	header: {
		backgroundImage: `url(${background})`,
		backgroundColor: '#0b7778',
		height: '98vh',
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'right',
		position: 'relative',
		padding: '0 5vw',

		[theme.breakpoints.down('md')]: {
			backgroundSize: 'cover'
		},

		[theme.breakpoints.down('sm')]: {
			height: '80vh'
		}
	},
	heading: {
		'&.MuiTypography-root': {
			color: '#fff',
			textShadow: '2px 2px 10px rgba(0,0,0,.2)',
			textAlign: 'center',
			paddingTop: '12vw',

			[theme.breakpoints.down('md')]: {
				paddingTop: '20vw',
				lineHeight: '2rem'
			},

			[theme.breakpoints.down('sm')]: {
				paddingTop: '40vw'
			}
		}
	},
	subHeading: {
		'&.MuiTypography-root': {
			color: '#fff',
			textAlign: 'center',
			fontSize: 'clamp(1rem, 1vw, 3rem)',
			fontFamily: "'CopperplateMedium'",
			fontWeight: '600',
			textTransform: 'uppercase',
			letterSpacing: '1px',
			marginTop: theme.spacing(3)
		}
	},
	robot: {
		position: 'absolute',
		bottom: '-11.5%',
		left: '5%',

		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},
	dialog: {
		position: 'absolute',
		bottom: '25%',
		left: '15%',
		width: 'clamp(100px, 15vw, 400px)',

		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},
	smallRobot: {
		display: 'none',

		[theme.breakpoints.down('sm')]: {
			display: 'block',
			position: 'absolute',
			bottom: '-7%',
			left: '-4%',
			width: 250
		}
	},
	smallDialog: {
		display: 'none',

		[theme.breakpoints.down('sm')]: {
			display: 'block',
			position: 'absolute',
			bottom: '13%',
			left: '35%'
		}
	},
	btn: {
		'&.MuiIconButton-root': {
			position: 'absolute',
			bottom: '-15%',
			right: '5%',
			width: 200,

			[theme.breakpoints.down('sm')]: {
				width: 100,
				right: '2%',
				bottom: '-8%'
			}
		}
	}
}));
