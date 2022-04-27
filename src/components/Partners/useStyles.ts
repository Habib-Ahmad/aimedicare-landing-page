import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	partners: {
		marginTop: theme.spacing(25),
		backgroundColor: theme.palette.secondary.main,
		overflow: 'hidden',
		padding: '40px 0'
	},
	logoWrapper1: {
		overflow: 'hidden',
		display: 'flex',
		height: 'auto',
		width: '1500px',
		margin: theme.spacing(2, 'auto'),

		'&>img': {
			width: 150,
			marginLeft: 100,
			opacity: 1,
			objectFit: 'contain',
			animation: '$slideLeft 15s linear infinite'
		}
	},
	logoWrapper2: {
		overflow: 'hidden',
		display: 'flex',
		height: 'auto',
		// marginRight: '1500px',
		width: '1500px',
		margin: theme.spacing(2, 'auto'),

		'&>img': {
			width: 150,
			marginLeft: 100,
			opacity: 1,
			objectFit: 'contain',
			animation: '$slideRight 15s linear infinite'
		}
	},
	'@keyframes slideLeft': {
		'0%': {
			transform: 'translate3d(0, 0, 0)'
		},
		'100%': {
			transform: 'translate3d(-1500px, 0, 0)'
		}
	},
	'@keyframes slideRight': {
		'0%': {
			transform: 'translate3d(-1500px, 0, 0)'
		},
		'100%': {
			transform: 'translate3d(0, 0, 0)'
		}
	}
}));
