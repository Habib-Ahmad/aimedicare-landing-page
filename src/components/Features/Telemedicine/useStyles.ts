import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	telemedicine: {
		marginTop: theme.spacing(14),
		position: 'relative',
		height: '100vh',

		[theme.breakpoints.down('sm')]: {
			overflowX: 'hidden'
		}
	},
	heading: {
		'&.MuiTypography-root': {
			marginBottom: theme.spacing(2),

			[theme.breakpoints.down('md')]: {
				marginBottom: theme.spacing(15)
			}
		}
	},
	boxWrapper: {
		backgroundImage: 'linear-gradient(to bottom, #4fcaca, #137d81)',
		zIndex: -100,
		padding: theme.spacing(5, 6),
		transform: 'skew(0deg, -5deg)',

		'&>.MuiGrid-root': {
			transform: 'skew(0deg, 5deg)'
		},

		[theme.breakpoints.up('xl')]: {
			paddingBottom: '5vw'
		},

		[theme.breakpoints.down('md')]: {
			padding: theme.spacing(0, 3),
			transform: 'skew(0deg)',

			'&>.MuiGrid-root': {
				transform: 'skew(0deg)',

				'&>*': {
					marginBottom: '50px'
				}
			}
		}
	},
	iPhone: {
		display: 'block',
		margin: '-100px auto 0',
		width: '100%'
	},
	text: {
		'&.MuiTypography-root': {
			color: '#fff',
			fontSize: 'clamp(0.875rem, 1.5vw, 2.5rem)',
			lineHeight: 'clamp(2rem, 2.7vw, 4rem)'
		}
	},
	features: {
		display: 'block',
		margin: 'auto',
		width: 'clamp(300px, 25vw, 900px)'
	},
	dots: {
		position: 'absolute',
		bottom: '-5%',
		right: '10%',
		width: '80px',

		[theme.breakpoints.down('md')]: {
			bottom: '-3%',
			width: '60px'
		}
	}
}));
