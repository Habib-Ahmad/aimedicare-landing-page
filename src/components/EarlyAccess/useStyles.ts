import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	container: {
		margin: theme.spacing(10, 0),
		position: 'relative'
	},

	header: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center'
	},

	img: {
		width: '120px',
		marginLeft: '50px'
	},

	inputWrapper: {
		marginTop: '40px',
		width: '30%',
		display: 'block',
		margin: 'auto',

		[theme.breakpoints.down('sm')]: {
			width: '80%'
		}
	}
}));
