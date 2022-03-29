import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	about: {
		padding: '12vw 10vw 0',
		position: 'relative',

		[theme.breakpoints.down('sm')]: {
			paddingTop: '12vw'
		}
	},
	blob: {
		position: 'absolute',
		left: 0,
		width: '10%'
	},
	body: {
		'&.MuiTypography-root': {
			textAlign: 'justify',
			color: '#666666',
			lineHeight: 'clamp(2rem, 2vw, 4rem)',

			[theme.breakpoints.down('sm')]: {
				color: '#000',
				textAlign: 'left',
				fontSize: '0.875rem'
			}
		}
	},
	icons: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexWrap: 'wrap',
		marginTop: '150px',

		[theme.breakpoints.down('md')]: {
			marginTop: '50px'
		},

		[theme.breakpoints.down('sm')]: {
			marginTop: 0
		},

		'&>*': {
			padding: '15px',

			[theme.breakpoints.down('sm')]: {
				maxWidth: '33%',
				marginTop: '50px'
			}
		}
	}
}));
