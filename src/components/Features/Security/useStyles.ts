import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	security: {
		marginTop: theme.spacing(25)
	},
	txtWrapper: {
		backgroundColor: '#2390a2',
		color: '#fff',
		margin: theme.spacing(5, 0),
		padding: theme.spacing(6, 25),

		[theme.breakpoints.down('md')]: {
			padding: theme.spacing(3, 5)
		}
	},
	txt: {
		'&.MuiTypography-root': {
			fontWeight: 200,
			textAlign: 'center',

			[theme.breakpoints.down('md')]: {
				fontSize: '0.875rem'
			}
		}
	},
	imgWrapper: {
		display: 'grid',
		placeItems: 'center',

		'&>img': {
			objectFit: 'cover',
			width: '60%',

			[theme.breakpoints.down('md')]: {
				width: '90%'
			}
		}
	}
}));
