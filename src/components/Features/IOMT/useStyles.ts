import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	iomt: {
		marginTop: theme.spacing(10),
		padding: '0 5vw',

		[theme.breakpoints.up('xl')]: {
			marginBottom: theme.spacing(50)
		}
	},
	watchWrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		position: 'relative',
		width: '90%',

		[theme.breakpoints.down('md')]: {
			flexDirection: 'column'
		}
	},
	stats: {
		position: 'absolute',
		width: '19vw',
		top: 0,
		left: '18%',
		zIndex: 100,

		[theme.breakpoints.up('xl')]: {
			width: '18vw',
			left: '20%'
		},

		[theme.breakpoints.down('md')]: {
			width: '27vw',
			left: '23vw'
		}
	},
	watch: {
		position: 'absolute',
		width: '22vw',
		top: 0,
		left: '50%',

		[theme.breakpoints.down('md')]: {
			width: '35vw'
		}
	},
	text: {
		'&.MuiTypography-root': {
			textAlign: 'justify',
			[theme.breakpoints.down('md')]: {
				margin: '500px 0 20px'
			},
			[theme.breakpoints.down('sm')]: {
				marginTop: '350px'
			}
		}
	},
	sliderWrapper: {
		position: 'relative',

		[theme.breakpoints.down('md')]: {
			height: '171px'
		}
	},
	slide: {
		transform: 'scale(0.2)',
		transition: 'transform 300ms',
		opacity: '0.5',

		'&>img': {
			width: '6rem',
			margin: 'auto',

			[theme.breakpoints.up('xl')]: {
				width: '12rem'
			},

			[theme.breakpoints.down('md')]: {
				width: '4rem'
			}
		}
	},
	activeSlide: {
		transform: 'scale(1)',
		opacity: 1
	},
	arrow: {
		'&.MuiIconButton-root': {
			position: 'absolute',
			zIndex: 10
		},

		'&>img': {
			width: 10,

			[theme.breakpoints.up('xl')]: {
				width: '0.8vw'
			}
		}
	},
	next: {
		right: 0,
		bottom: '45%',

		[theme.breakpoints.down('md')]: {
			bottom: '-40%',
			right: '38%'
		}
	},
	prev: {
		right: 0,
		bottom: '65%',

		[theme.breakpoints.down('md')]: {
			bottom: '-40%',
			right: '57%'
		}
	},
	active: {
		position: 'absolute',
		right: '-1%',
		bottom: '54%',
		width: 30,

		[theme.breakpoints.up('xl')]: {
			width: 50,
			right: '-4%'
		},

		[theme.breakpoints.down('md')]: {
			bottom: '15%',
			right: '47%'
		}
	}
}));
