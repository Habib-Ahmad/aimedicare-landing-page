import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	bigData: {
		position: 'relative'
	},

	dots: {
		position: 'absolute',
		top: 0,
		right: '15%',
		width: 80
	},

	img: {
		display: 'block',
		margin: theme.spacing(0, 'auto'),
		width: '100%',
		objectFit: 'cover'
	}
}));
