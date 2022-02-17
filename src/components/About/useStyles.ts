import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	about: {
		paddingTop: theme.spacing(6),
		position: 'relative'
	},
	blob: {
		position: 'absolute',
		left: 0,
		width: '10%'
	},
	body: {
		'&.MuiTypography-root': {
			textAlign: 'center',
			color: '#666666',
			lineHeight: '2rem',
			padding: theme.spacing(0, 20),

			[theme.breakpoints.down('sm')]: {
				color: '#000',
				textAlign: 'left',
				fontSize: '0.875rem',
				lineHeight: '1.5rem',
				padding: theme.spacing(0, 3)
			}
		}
	}
}));
