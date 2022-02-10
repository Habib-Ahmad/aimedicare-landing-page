import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import background from '../../assets/header/background.png';

export const useStyles = makeStyles((theme: Theme) => ({
	header: {
		backgroundImage: `url(${background})`,
		height: '100vh',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat'
	},
	heading: {
		paddingTop: theme.spacing(20),
		paddingLeft: theme.spacing(8),
		width: '60%',
		color: '#fff'
	}
}));
