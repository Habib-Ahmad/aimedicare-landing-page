import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	contact: {
		marginTop: theme.spacing(8),
		padding: theme.spacing(0, 40),

		[theme.breakpoints.down('lg')]: {
			padding: theme.spacing(0, 20)
		},

		[theme.breakpoints.down('md')]: {
			padding: theme.spacing(0, 4)
		}
	},
	inputWrapper: {
		display: 'flex',
		alignItems: 'center',
		margin: theme.spacing(2, 0),

		[theme.breakpoints.down('md')]: {
			flexDirection: 'column'
		}
	}
}));
