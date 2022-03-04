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
			top: '20%'
		}
	},

	img: {
		display: 'block',
		margin: theme.spacing(0, 'auto'),
		width: 700,
		zIndex: 100,

		[theme.breakpoints.up('xl')]: {
			width: 1291
		},

		[theme.breakpoints.down('sm')]: {
			width: 400
		}
	},

	txt: {
		'&.MuiTypography-root': {
			color: '#666666',
			marginTop: theme.spacing(5),
			padding: '0 10vw',

			[theme.breakpoints.down('sm')]: {
				fontSize: '0.875rem'
			}
		}
	}
}));
