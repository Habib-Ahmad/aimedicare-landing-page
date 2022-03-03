import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	about: {
		padding: '8vw 10vw 0',
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
			textAlign: 'center',
			color: '#666666',
			lineHeight: 'clamp(2rem, 2vw, 4rem)',

			[theme.breakpoints.down('sm')]: {
				color: '#000',
				textAlign: 'left',
				fontSize: '0.875rem'
			}
		}
	}
}));
