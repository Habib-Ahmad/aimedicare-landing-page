import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	triage: {
		marginTop: theme.spacing(10),
		overflow: 'hidden',

		'&>.MuiTypography-root': {
			padding: '0 25%',
			textAlign: 'center',

			[theme.breakpoints.down('sm')]: {
				padding: 0
			}
		}
	},
	imgWrapper: {
		marginTop: theme.spacing(10),
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	robot: {
		width: '25%'
	},
	img: {
		width: '50%'
	}
}));
