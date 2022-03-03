import { createTheme } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});

export const theme = createTheme({
	typography: {
		fontFamily: "'Poppins', 'sans-serif'",

		allVariants: {
			fontSize: 'clamp(0.875rem, 1.2vw, 2rem)'
		},

		h1: {
			fontFamily: "'Copperplate'",
			textTransform: 'uppercase',
			fontSize: 'clamp(1.2rem, 2vw, 4rem)',
			fontWeight: 700,
			letterSpacing: '2px',

			'&::first-letter': {
				fontSize: 'clamp(1.5rem, 2.5vw, 4.2rem)'
			}
		},

		h2: {
			fontFamily: "'Copperplate'",
			fontSize: 'clamp(1.2rem, 2vw, 3rem)',
			textAlign: 'center',
			textTransform: 'lowercase',

			'&::first-letter': {
				fontSize: 'clamp(1.5rem, 2.2vw, 3.5rem)'
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
