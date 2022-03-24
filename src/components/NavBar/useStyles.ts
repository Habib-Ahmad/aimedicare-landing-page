import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	navbar: {
		padding: theme.spacing(0, 8),
		backgroundColor: 'transparent',
		position: 'absolute',
		top: 0,
		zIndex: 1000,

		'&>.MuiGrid-root>.MuiButton-text': {
			textShadow: '2px 2px 4px rgba(0,0,0,.2)'
		},

		[theme.breakpoints.down('md')]: {
			padding: theme.spacing(0, 2)
		}
	},
	gridItem: {
		[theme.breakpoints.down('md')]: {
			paddingLeft: '10vw'
		}
	},
	logoWrapper: {
		display: 'flex',
		alignItems: 'center',

		[theme.breakpoints.down('md')]: {
			flexDirection: 'column'
		}
	},
	logo: {
		backgroundColor: '#fff',
		borderBottomLeftRadius: '2vw',
		borderBottomRightRadius: '2vw',
		padding: '15px 10px',
		marginRight: 15,
		width: '7vw',
		maxWidth: 150,
		minWidth: 90,

		[theme.breakpoints.down('md')]: {
			margin: ' 0 auto',
			display: 'block',
			borderBottomLeftRadius: '5vw',
			borderBottomRightRadius: '5vw'
		}
	},
	logoText: {
		'&.MuiTypography-root': {
			color: '#fff',
			fontWeight: 700,
			fontSize: 'clamp(1.2rem, 1vw, 4rem)',

			[theme.breakpoints.down('md')]: {
				textAlign: 'center'
			}
		}
	},
	menu: {
		'&.MuiIconButton-root': {
			display: 'none',

			[theme.breakpoints.down('md')]: {
				display: 'block',
				marginLeft: 'auto'
			}
		}
	},
	menuItems: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		height: '100%',

		'&>.MuiButton-root': {
			flex: 1,
			textTransform: 'none',
			fontSize: 'clamp(0.875rem, 1.2vw, 1.5rem)'
		}
	},
	drawer: {
		'&>.MuiPaper-root': {
			paddingTop: theme.spacing(5),

			'&>.MuiButton-root': {
				color: theme.palette.primary.main,
				textTransform: 'none',
				margin: '8px 0',
				width: 140,
				zIndex: 200
			}
		}
	}
}));
