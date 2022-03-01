import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	iomt: {
		marginTop: theme.spacing(10)
	},
	leftWrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',

		[theme.breakpoints.down('md')]: {
			flexDirection: 'column'
		}
	},
	watchWrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',

		[theme.breakpoints.down('md')]: {
			flexDirection: 'row'
		}
	},
	endWatch: {
		width: 30,
		transitionDuration: '0.5s'
	},
	middleWatch: {
		width: 80,
		transitionDuration: '0.5s'
	},
	centerWatch: {
		width: 160,
		transitionDuration: '0.5s'
	}
}));
