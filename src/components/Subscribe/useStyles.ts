import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	subscribe: {
		'&>.MuiOutlinedInput-root': {
			backgroundColor: theme.palette.secondary.main,
			marginTop: 10,
			height: 40,
			paddingRight: 0,
			width: '100%',
			fontSize: '0.875rem'
		}
	},

	subscribeBtn: {
		'&.MuiButton-root': {
			backgroundColor: '#049193',
			color: '#fff',
			boxShadow: '-2px 0px 4px rgba(0,0,0,.1)',
			width: 120,
			height: 40,
			fontWeight: 600,

			'&:hover': {
				backgroundColor: '#057c7e'
			}
		}
	}
}));
