import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	iomt: {
		margin: theme.spacing(15, 0),
		padding: '10vw',

		[theme.breakpoints.down('md')]: {
			paddingBottom: '15vw',
			backgroundColor: theme.palette.secondary.main
		}
	},

	slide: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},

	arrow: {
		[theme.breakpoints.down('md')]: {
			width: '30px',
			zIndex: 100
		}
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
		zIndex: 200,

		[theme.breakpoints.down('md')]: {
			width: '150px',
			top: '-50%',
			left: '-35%'
		}
	},

	watch: {
		width: 'auto',
		height: '400px',

		[theme.breakpoints.down('md')]: {
			height: '200px',
			margin: '0 30px',
			zIndex: 100
		}
	},

	splash: {
		position: 'absolute',
		bottom: '-30%',
		zIndex: '-100',
		width: '450px',

		[theme.breakpoints.down('md')]: {
			width: '250px',
			zIndex: '0'
		}
	},

	headingWrapper: {
		position: 'relative',

		[theme.breakpoints.down('md')]: {
			marginLeft: 0,
			marginBottom: '200px'
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
