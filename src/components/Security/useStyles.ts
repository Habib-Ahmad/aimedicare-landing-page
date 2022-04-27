import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	container: {
		'&.MuiGrid-root': {
			marginTop: theme.spacing(15),
			backgroundColor: theme.palette.secondary.main,
			padding: '10vw 5vw',

			[theme.breakpoints.down('sm')]: {
				marginTop: theme.spacing(10),
				backgroundColor: '#fff'
			}
		}
	},

	img: {
		width: '100%',
		display: 'block',
		marginLeft: 'auto'
	},

	headingWrapper: {
		[theme.breakpoints.down('md')]: {
			marginBottom: '100px'
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
