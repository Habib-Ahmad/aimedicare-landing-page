import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	navbar: {
		padding: theme.spacing(0, 8),
		backgroundColor: 'transparent',
		position: 'fixed',
		top: 0,

		'&>.MuiGrid-root>.MuiButton-text': {
			textShadow: '2px 2px 4px rgba(0,0,0,1)'
		}
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
	menu: {
		'&.MuiIconButton-root': {
			display: 'none',

			[theme.breakpoints.down('md')]: {
				display: 'flex'
			}
		}
	}
}));
