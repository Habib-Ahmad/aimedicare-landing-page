import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	security: {
		marginTop: theme.spacing(25)
	},
	txtWrapper: {
		backgroundColor: '#2390a2',
		color: '#fff',
		margin: theme.spacing(5, 0),
		padding: theme.spacing(6, 25),

		[theme.breakpoints.down('md')]: {
			padding: theme.spacing(3, 5)
		}
	},
	txt: {
		'&.MuiTypography-root': {
			fontWeight: 200,
			textAlign: 'center',

			[theme.breakpoints.down('md')]: {
				fontSize: '0.875rem'
			}
		}
	},
	imgWrapper: {
		display: 'grid',
		placeItems: 'center',
		margin: theme.spacing(5, 0),

		'&>img': {
			objectFit: 'cover',
			width: '60%',

			[theme.breakpoints.down('md')]: {
				width: '90%'
			}
		}
	},
	earlyAccess: {
		marginTop: '250px',
		padding: '0 30vw',

		[theme.breakpoints.down('md')]: {
			padding: '0 25vw'
		},

		[theme.breakpoints.down('sm')]: {
			padding: '0 10vw'
		},

		'&>.MuiTypography-root': {
			textAlign: 'center',
			fontWeight: 600,
			marginBottom: '10px'
		}
	},
	subscribe: {
		'&>.MuiOutlinedInput-root': {
			marginTop: 10,
			height: 40,
			borderRadius: 30,
			backgroundColor: '#fff',
			paddingRight: 0,
			width: '100%',
			fontSize: '0.875rem',
			margin: 'auto'
		}
	},
	subscribeBtn: {
		'&.MuiButton-root': {
			borderRadius: 30,
			backgroundColor: theme.palette.primary.main,
			fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
			color: '#fff',
			boxShadow: '-2px 0px 4px rgba(0,0,0,.1)',
			width: 120,
			height: 40,
			fontWeight: 600,

			'&:hover': {
				backgroundColor: theme.palette.primary.main,
				color: '#fff'
			}
		}
	}
}));
