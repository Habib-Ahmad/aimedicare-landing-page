import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	features: {
		marginTop: theme.spacing(18),
		position: 'relative'
	},
	curve: {
		position: 'absolute',
		objectFit: 'cover',
		display: 'none'
	},
	blob: {
		position: 'absolute',
		right: 0,
		top: '5%',
		width: '25%'
	},
	triageBlob1: {
		position: 'absolute',
		right: 0,
		top: '43%',
		width: '15vw'
	},
	feature: {
		display: 'grid',
		placeItems: 'center',

		'&>img': {
			width: '10vw',
			minWidth: 120
		},

		'&>.MuiTypography-root': {
			fontWeight: 600,
			fontSize: 'clamp(0.875rem, 1vw, 1.5rem)',
			marginTop: theme.spacing(),
			color: '#676868',
			textAlign: 'center'
		}
	}
}));
