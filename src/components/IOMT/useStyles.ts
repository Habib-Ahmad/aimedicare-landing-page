import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	iomt: {
		margin: theme.spacing(15, 0),
		padding: '0 5vw'
	},

	slide: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},

	watchWrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		position: 'relative',

		[theme.breakpoints.down('md')]: {
			flexDirection: 'column'
		}
	},

	stats: {
		position: 'absolute',
		width: '250px',
		top: '-30%',
		left: '-60%',
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
		width: 'auto',
		height: '400px'
	},

	splash: {
		position: 'absolute',
		bottom: '-30%',
		zIndex: '-100',
		width: '450px'
	},

	headingWrapper: {
		position: 'relative',

		[theme.breakpoints.down('sm')]: {
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

			[theme.breakpoints.down('sm')]: {
				textAlign: 'left',
				paddingLeft: 0,
				borderLeft: 'none',
				lineHeight: '2rem'
			}
		}
	},

	two: {
		position: 'absolute',
		left: '-30%',
		top: '-50%',

		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	}
}));
