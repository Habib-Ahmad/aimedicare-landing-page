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
			fontSize: '1.2rem',
			fontWeight: '600',
			marginBottom: theme.spacing(2),

			[theme.breakpoints.up('xl')]: {
				fontSize: '2.4rem'
			}
		}
	},
	links: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		flexWrap: 'wrap',
		height: 150,

		[theme.breakpoints.up('xl')]: {
			height: 250
		},

		[theme.breakpoints.down('md')]: {
			height: 'auto'
		}
	},
	btn: {
		'&.MuiButton-root': {
			textTransform: 'none',
			fontWeight: 300,
			fontSize: '0.8rem',

			[theme.breakpoints.up('xl')]: {
				fontSize: '1.8rem'
			}
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
			maxWidth: 500,
			fontSize: '0.875rem',

			[theme.breakpoints.up('xl')]: {
				height: 80,
				maxWidth: 700,
				borderRadius: 50,
				fontSize: '1.5rem'
			}
		}
	},
	subscribeBtn: {
		'&.MuiButton-root': {
			borderRadius: 30,
			color: theme.palette.primary.main,
			boxShadow: '-2px 0px 4px rgba(0,0,0,.1)',
			width: 120,
			height: 40,
			fontWeight: 600,

			[theme.breakpoints.up('xl')]: {
				height: 80,
				width: 240,
				borderRadius: 50
			}
		}
	}
}));
