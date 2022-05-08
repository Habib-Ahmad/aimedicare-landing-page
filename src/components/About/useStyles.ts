import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	about: {
		padding: '12vw 5vw 0 0',
		display: 'flex',
		alignItems: 'center',

		[theme.breakpoints.down('sm')]: {
			padding: '12vw 0 0',
			flexDirection: 'column'
		}
	},
	headingWrapper: {
		backgroundColor: theme.palette.secondary.main,
		padding: '40px 40px 40px 70px',

		[theme.breakpoints.down('sm')]: {
			padding: '10vw',
			marginBottom: '50px'
		}
	},
	phone: {
		marginLeft: '-70px',

		[theme.breakpoints.down('sm')]: {
			marginLeft: 0,
			width: '210px'
		}
	},
	arrow: {
		width: '120px',
		margin: '-100px 50px 0 -70px',

		[theme.breakpoints.down('sm')]: {
			margin: '0',
			width: '80px'
		}
	},
	features: {
		marginBottom: '100px',

		[theme.breakpoints.down('sm')]: {
			marginBottom: '20px',
			marginTop: '-30px',
			width: '150px'
		}
	},
	one: {
		position: 'absolute',
		left: '60%',

		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},
	telemedicineWrapper: {
		position: 'relative',
		marginLeft: '-70px',

		[theme.breakpoints.down('sm')]: {
			marginLeft: 0,
			padding: '0 10vw'
		}
	},
	text: {
		'&.MuiTypography-root': {
			textAlign: 'justify',
			color: '#747582',
			borderLeft: '2px solid #0FA6AA',
			paddingLeft: '20px',

			[theme.breakpoints.down('sm')]: {
				paddingLeft: 0,
				borderLeft: 'none',
				lineHeight: '2rem'
			}
		}
	}
}));
