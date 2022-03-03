import { createTheme } from '@mui/material/styles';

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
			fontSize: 'clamp(1rem, 2vw, 2.3rem)',
			textAlign: 'center',
			textTransform: 'lowercase',

			'&::first-letter': {
				fontSize: 'clamp(1.5rem, 2.2vw, 2.7rem)'
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
