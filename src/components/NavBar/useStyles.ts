import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	navbar: {
		padding: theme.spacing(0, 3)
	},
	logo: {
		backgroundColor: '#fff',
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		padding: 8,
		marginRight: 15
	},
	logoText: {
		'&.MuiTypography-root': {
			color: '#fff',
			fontWeight: 700,
			fontSize: '1.5rem'
		}
	},
	btnWrapper: {
		display: 'flex',
		justifyContent: 'flex-end',

		'&>.MuiButton-root': {
			width: '25%',
			maxWidth: 150
		}
	}
}));
