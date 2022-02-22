import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	bigData: {
		marginTop: theme.spacing(10),
		position: 'relative'
	},

	dots: {
		position: 'absolute',
		top: '5%',
		right: '15%',
		width: '7%',

		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},

	blob: {
		position: 'absolute',
		left: 0,
		top: '25%',
		width: '25%',

		[theme.breakpoints.down('md')]: {
			top: '5%'
		}
	},

	img: {
		display: 'block',
		margin: theme.spacing(0, 'auto'),
		width: '100%',
		objectFit: 'cover'
	},

	txt: {
		'&.MuiTypography-root': {
			color: '#666666',
			marginTop: theme.spacing(5),
			padding: '0 10vw',
			fontSize: '1.2rem',

			[theme.breakpoints.down('sm')]: {
				fontSize: '0.875rem'
			}
		}
	}
}));
