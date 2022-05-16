import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	about: {
		padding: '12vw 5vw 0 0',
		display: 'flex',
		alignItems: 'center',

		[theme.breakpoints.down('md')]: {
			padding: '12vw 0 0',
			flexDirection: 'column'
		}
	},
	headingWrapper: {
		backgroundColor: theme.palette.secondary.main,
		padding: '40px 40px 40px 70px',

		[theme.breakpoints.down('md')]: {
			padding: '10vw 5vw',
			marginBottom: '50px'
		}
	},
	phone: {
		marginLeft: '-70px',

		[theme.breakpoints.down('lg')]: {
			marginLeft: 0,
			maxWidth: '300px'
		},

		[theme.breakpoints.down('md')]: {
			marginLeft: 0,
			maxWidth: '180px'
		}
	},
	arrow: {
		width: '120px',
		margin: '-100px 50px 0 -70px',

		[theme.breakpoints.down('md')]: {
			margin: '0',
			width: '80px'
		},

		[theme.breakpoints.down('sm')]: {
			width: '50px',
			marginLeft: '-15px'
		}
	},
	features: {
		marginBottom: '100px',
		width: '300px',

		[theme.breakpoints.down('md')]: {
			marginBottom: '20px',
			marginTop: '-30px',
			marginLeft: '30px',
			width: '150px'
		},

		[theme.breakpoints.down('sm')]: {
			marginLeft: '0px'
		}
	},
	featuresWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start'
	},
	one: {
		position: 'absolute',
		left: '60%',

		[theme.breakpoints.down('md')]: {
			display: 'none'
		}
	},
	telemedicineWrapper: {
		position: 'relative',
		marginLeft: '-70px',

		[theme.breakpoints.down('md')]: {
			marginLeft: 0,
			padding: '0 5vw'
		}
	},
	text: {
		'&.MuiTypography-root': {
			textAlign: 'justify',
			color: '#747582',
			borderLeft: '2px solid #0FA6AA',
			paddingLeft: '20px',

			[theme.breakpoints.down('md')]: {
				paddingLeft: 0,
				borderLeft: 'none',
				lineHeight: '2rem'
			}
		}
	}
}));
