import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	contact: {
		margin: theme.spacing(25, 'auto', 0),
		width: '60%',
		display: 'block',

		[theme.breakpoints.down('sm')]: {
			width: '80%'
		}
	},
	inputWrapper: {
		display: 'flex',
		alignItems: 'center',
		margin: theme.spacing(2, 0),

		[theme.breakpoints.down('md')]: {
			flexDirection: 'column'
		}
	},
	txt: {
		'&.MuiTypography-root': {
			marginTop: theme.spacing(3),
			fontSize: 'clamp(0.7rem, 1vw, 1rem)',

			[theme.breakpoints.up('xl')]: {
				fontSize: '1.3rem'
			}
		}
	},
	btn: {
		'&.MuiButton-root': {
			[theme.breakpoints.up('xl')]: {
				width: 200,
				height: 80,
				fontSize: '1.5rem'
			}
		}
	}
}));
