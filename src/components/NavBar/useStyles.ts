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
	logo: {
		backgroundColor: '#fff',
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		padding: 8,
		marginRight: 15,
		width: 70,

		[theme.breakpoints.down('md')]: {
			margin: ' 0 auto',
			display: 'block'
		}
	},
	logoText: {
		'&.MuiTypography-root': {
			color: '#fff',
			fontWeight: 700,
			fontSize: '1.5rem',

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

		'&>.MuiButton-root': {
			width: 120,
			textTransform: 'none'
		}
	},
	drawer: {
		'&>.MuiPaper-root': {
			paddingTop: theme.spacing(5),

			'&>.MuiButton-root': {
				color: theme.palette.primary.main,
				textTransform: 'none',
				margin: '8px 0',
				width: 140
			}
		}
	}
}));
