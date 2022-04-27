import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	container: {
		'&.MuiGrid-root': {
			marginTop: theme.spacing(25),
			backgroundColor: theme.palette.secondary.main,
			padding: '10vw',

			[theme.breakpoints.down('sm')]: {
				backgroundColor: '#fff'
			}
		}
	},

	img: {
		maxWidth: '80%',
		display: 'block',
		marginLeft: 'auto',

		[theme.breakpoints.down('sm')]: {
			width: '100%',
			margin: 'auto'
		}
	},

	headingWrapper: {
		position: 'relative',

		[theme.breakpoints.down('md')]: {
			marginBottom: '100px'
		}
	},

	three: {
		position: 'absolute',
		left: '30%',
		top: '-20%',

		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},

	text: {
		'&.MuiTypography-root': {
			textAlign: 'justify',
			color: '#747582',
			borderLeft: '2px solid #0FA6AA',
			lineHeight: '2rem',
			paddingLeft: '20px',

			[theme.breakpoints.down('sm')]: {
				textAlign: 'left',
				paddingLeft: 0,
				borderLeft: 'none',
				lineHeight: '2rem'
			}
		}
	}
}));
