import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	navbar: {
		padding: theme.spacing(0, 8),
		backgroundColor: theme.palette.primary.main,
		height: '10vh',

		[theme.breakpoints.down('md')]: {
			padding: theme.spacing(0, 3),
			backgroundColor: theme.palette.secondary.main
		}
	},

	logoWrapper: {
		display: 'flex',
		alignItems: 'center'
	},

	logo: {
		width: 40
	},

	logoText: {
		'&.MuiTypography-root': {
			marginLeft: '30px',
			color: '#fff',
			fontWeight: 500,
			fontSize: 'clamp(1.2rem, 2vw, 4rem)',

			[theme.breakpoints.down('md')]: {
				textAlign: 'center',
				marginLeft: '15px',
				color: theme.palette.primary.main,
				fontWeight: 700
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
		justifyContent: 'flex-start',
		height: '100%',

		'&>.MuiButton-root': {
			fontSize: 'clamp(0.875rem, 1.2vw, 1.5rem)',
			fontWeight: 400,
			marginRight: '20px',

			'&::after': {
				content: "''",
				width: 20,
				height: 20,
				backgroundColor: 'white',
				borderRadius: '50%'
			},

			[theme.breakpoints.down('sm')]: {
				marginRight: 0
			}
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
