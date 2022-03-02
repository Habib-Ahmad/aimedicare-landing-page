import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	iomt: {
		marginTop: theme.spacing(10),
		transition: 'all 2s'
	},
	leftWrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',

		[theme.breakpoints.down('md')]: {
			flexDirection: 'column'
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
			width: '7rem',
			margin: 'auto'
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
		}
	},
	next: {
		right: 0,
		bottom: '45%',

		[theme.breakpoints.down('md')]: {
			bottom: '-20%',
			right: '38%'
		}
	},
	prev: {
		right: 0,
		bottom: '65%',

		[theme.breakpoints.down('md')]: {
			bottom: '-20%',
			right: '57%'
		}
	},
	active: {
		position: 'absolute',
		right: '-2%',
		bottom: '62%',

		[theme.breakpoints.down('md')]: {
			bottom: '-23%',
			right: '47%'
		}
	}
}));
