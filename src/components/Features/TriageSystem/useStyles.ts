import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	triage: {
		marginTop: theme.spacing(25),
		overflow: 'hidden',
		position: 'relative',

		'&>.MuiTypography-root': {
			padding: '0 25%',
			textAlign: 'center',

			[theme.breakpoints.down('sm')]: {
				padding: '0 5vw'
			}
		},

		[theme.breakpoints.down('sm')]: {
			marginTop: theme.spacing(10)
		}
	},
	imgWrapper: {
		marginTop: theme.spacing(5),
		display: 'flex',
		alignItems: 'flex-start'
	},
	robot: {
		[theme.breakpoints.down('sm')]: {
			width: '35%'
		}
	},
	img: {
		width: '50%',
		marginTop: theme.spacing(10),

		[theme.breakpoints.down('sm')]: {
			width: '60%',
			marginTop: theme.spacing()
		}
	}
}));
