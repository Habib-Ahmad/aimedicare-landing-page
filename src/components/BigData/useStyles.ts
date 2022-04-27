import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	container: {
		'&.MuiGrid-root': {
			marginTop: theme.spacing(15),
			padding: '0 5vw',

			[theme.breakpoints.down('sm')]: {
				backgroundColor: theme.palette.secondary.main,
				padding: '10vw 5vw'
			}
		}
	},

	img: {
		width: '350px',
		display: 'block',
		marginLeft: 'auto',
		marginRight: '100px',

		[theme.breakpoints.down('sm')]: {
			width: '250px',
			display: 'block',
			margin: 'auto'
		}
	},

	headingWrapper: {
		paddingRight: '200px',
		textAlign: 'justify',

		[theme.breakpoints.down('sm')]: {
			paddingRight: 0,
			marginBottom: '50px'
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
