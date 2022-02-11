import { createTheme } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});

export const theme = createTheme({
	typography: {
		fontFamily: "'Poppins', 'sans-serif'",
		h1: {
			textTransform: 'uppercase',
			fontSize: '3rem',
			fontWeight: 700
		},

		h2: {
			fontFamily: "'Copperplate'",
			fontSize: '2rem',
			textAlign: 'center',
			textTransform: 'lowercase',

			'&::first-letter': {
				fontSize: '2.4rem'
			},

			[breakpoints.down('md')]: {
				fontSize: '1.3rem',

				'&::first-letter': {
					fontSize: '1.8rem'
				}
			}
		},
		button: {
			fontWeight: 700
		}
	},

	palette: {
		primary: {
			main: '#4FCACA'
		}
	},

	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					color: '#fff',
					boxShadow: 'none',

					'&:hover': {
						boxShadow: 'none'
					}
				},

				sizeMedium: {
					width: 150
				}
			},
			defaultProps: {
				disableRipple: true
			}
		},

		MuiIconButton: {
			defaultProps: {
				disableRipple: true
			}
		}
	}
});
