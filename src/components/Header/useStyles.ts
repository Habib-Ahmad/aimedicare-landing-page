import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	header: {
		height: '75vh',
		position: 'relative',
		padding: '8vw 8vw 8vw 18vw',
		backgroundColor: theme.palette.secondary.main,
		display: 'flex',
		alignItems: 'flex-start',

		[theme.breakpoints.down('sm')]: {
			padding: '20vw 10vw'
		}
	},

	arrow: {
		position: 'absolute',
		width: '100px',
		left: '55%',
		top: '30%',

		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},

	heading: {
		'&.MuiTypography-root': {
			fontSize: 'clamp(2rem, 3.3vw, 4rem)',
			fontWeight: 700,
			color: '#282C4B',
			width: '70%',
			marginBottom: '20px',

			'&>span': {
				color: theme.palette.primary.main,
				position: 'relative',

				'&>img': {
					position: 'absolute',
					left: '5%',
					bottom: '-25%',
					width: '250px',

					[theme.breakpoints.down('sm')]: {
						width: '150px'
					}
				}
			},

			[theme.breakpoints.down('sm')]: {
				width: '100%'
			}
		}
	},

	subHeading: {
		'&.MuiTypography-root': {
			color: '#747582',
			fontSize: 'clamp(1rem, 1vw, 3rem)',
			width: '60%',
			lineHeight: '2rem',

			[theme.breakpoints.down('sm')]: {
				width: '90%'
			}
		}
	},

	btnWrapper: {
		marginTop: '30px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',

		[theme.breakpoints.down('sm')]: {
			marginTop: 0
		}
	},

	btn1: {
		'&.MuiButton-root': {
			borderRadius: '30px',
			height: '60px',
			width: '170px',
			background: 'linear-gradient(95.98deg, #058081 -1.26%, #01A2A4 112.07%)',
			marginRight: '30px',

			[theme.breakpoints.down('sm')]: {
				marginRight: '15px',
				width: '150px'
			}
		}
	},

	eski: {
		display: 'none',

		[theme.breakpoints.down('sm')]: {
			width: '200px',
			display: 'block',
			marginLeft: 'auto',
			marginTop: '-30px',
			marginRight: '-50px'
		}
	},

	desktopEski: {
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	}
}));
