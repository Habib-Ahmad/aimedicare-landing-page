import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	features: {
		marginTop: theme.spacing(18),
		padding: '0 5vw',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',

		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column'
		}
	},
	headingWrapper: {
		width: '20%',
		minWidth: '150px',
		marginRight: '60px',

		[theme.breakpoints.down('sm')]: {
			width: '100%',
			marginRight: 0,
			marginBottom: '40px'
		}
	},
	featureWrapper: {
		display: 'flex',
		alignItems: 'center',
		overflowX: 'scroll',
		overflowY: 'hidden',

		[theme.breakpoints.down('sm')]: {
			width: '100vw'
		}
	},
	feature: {
		display: 'flex',
		flexDirection: 'column',
		border: '1px solid #adadad40',
		width: '160px',
		height: '160px',
		margin: '10px',
		padding: '20px',
		flexShrink: 0,

		'&:hover': {
			boxShadow: '0px 0px 10px rgba(0,0,0,0.2)'
		},

		'&>img': {
			width: '40px',
			marginBottom: '20px'
		},

		'&>.MuiTypography-root': {
			fontWeight: '600',
			fontSize: '0.875rem'
		}
	}
}));
