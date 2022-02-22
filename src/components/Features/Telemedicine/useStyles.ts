import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	telemedicine: {
		marginTop: theme.spacing(14),
		position: 'relative'
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
		padding: theme.spacing(0, 6),
		transform: 'skew(0deg, -5deg)',

		'&>.MuiGrid-root': {
			transform: 'skew(0deg, 5deg)'
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
		width: 350,

		[theme.breakpoints.down('sm')]: {
			width: 280
		}
	},
	text: {
		'&.MuiTypography-root': {
			color: '#fff'
		}
	},
	features: {
		display: 'block',
		margin: 'auto',
		width: '300px'
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
