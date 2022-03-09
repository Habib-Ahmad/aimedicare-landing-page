import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	footer: {
		backgroundColor: theme.palette.primary.main,
		color: '#fff',
		padding: theme.spacing(4, 8),

		[theme.breakpoints.down('md')]: {
			padding: theme.spacing(4, 3)
		}
	},
	gridItem: {
		padding: theme.spacing(0, 2),

		[theme.breakpoints.down('md')]: {
			padding: theme.spacing(0, 1)
		},

		[theme.breakpoints.down('sm')]: {
			textAlign: 'center'
		}
	},
	heading: {
		'&.MuiTypography-root': {
			fontSize: 'clamp(1rem, 1.5vw, 4rem)',
			fontWeight: '600',
			marginBottom: theme.spacing(2)
		}
	},
	links: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		flexWrap: 'wrap',
		width: '100%'
	},
	btn: {
		'&.MuiButton-root': {
			textTransform: 'none',
			fontWeight: 300,
			fontSize: 'clamp(0.875rem, 1.2vw, 1.8rem)'
		}
	},
	copyright: {
		backgroundColor: '#fff',
		textAlign: 'center',
		padding: theme.spacing(0, 3),

		'&.MuiTypography-root': {
			color: theme.palette.primary.main
		},

		[theme.breakpoints.down('md')]: {
			backgroundColor: theme.palette.primary.main,

			'&.MuiTypography-root': {
				color: '#fff'
			}
		}
	},
	subscribe: {
		'&>.MuiOutlinedInput-root': {
			marginTop: 10,
			height: 40,
			borderRadius: 30,
			backgroundColor: '#fff',
			paddingRight: 0,
			width: '100%',
			fontSize: '0.875rem'
		}
	},
	subscribeBtn: {
		'&.MuiButton-root': {
			borderRadius: 30,
			color: theme.palette.primary.main,
			boxShadow: '-2px 0px 4px rgba(0,0,0,.1)',
			width: 120,
			height: 40,
			fontWeight: 600
		}
	}
}));
