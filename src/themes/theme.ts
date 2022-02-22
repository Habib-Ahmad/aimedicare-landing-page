import { createTheme } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});

export const theme = createTheme({
	typography: {
		fontFamily: "'Poppins', 'sans-serif'",
		h1: {
			fontFamily: "'Copperplate'",
			textTransform: 'uppercase',
			fontSize: '2rem',
			fontWeight: 700,

			'&::first-letter': {
				fontSize: '2.5rem'
			},

			[breakpoints.down('md')]: {
				fontSize: '1.5rem',

				'&::first-letter': {
					fontSize: '1.8rem'
				}
			}
		},

		h2: {
			fontFamily: "'Copperplate'",
			fontSize: '1.6rem',
			textAlign: 'center',
			textTransform: 'lowercase',

			'&::first-letter': {
				fontSize: '2rem'
			},

			[breakpoints.down('md')]: {
				fontSize: '1.3rem',

				'&::first-letter': {
					fontSize: '1.6rem'
				}
			}
		},

		h3: {
			fontFamily: "'Copperplate'",
			fontSize: '1.3rem',
			textAlign: 'center',
			textTransform: 'lowercase',

			'&::first-letter': {
				fontSize: '1.7rem'
			},

			[breakpoints.down('md')]: {
				fontSize: '1.1rem',

				'&::first-letter': {
					fontSize: '1.4rem'
				}
			}
		},

		button: {
			fontWeight: 700
		}
	},

	palette: {
		primary: {
			main: '#12A3A9'
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
