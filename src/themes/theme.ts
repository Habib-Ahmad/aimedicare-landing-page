import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	typography: {
		fontFamily: "'Ubuntu', sans-serif",

		allVariants: {
			fontSize: 'clamp(1rem, 1.2vw, 2rem)'
		},

		// h1: {
		// 	fontSize: 'clamp(1.8rem, 2vw, 4rem)',
		// 	fontWeight: 700,
		// 	color: '#282C4B'
		// },

		h2: {
			fontSize: 'clamp(1.5rem, 2vw, 3rem)',
			fontWeight: '700',
			color: '#282C4B'
		},

		h3: {
			fontSize: 'clamp(1rem, 2vw, 2.3rem)',
			textAlign: 'center',
			textTransform: 'lowercase',

			'&::first-letter': {
				fontSize: 'clamp(1.5rem, 2.2vw, 2.7rem)'
			}
		},

		h6: {
			color: '#F17216',
			fontSize: '0.875rem',
			fontWeight: '400',
			marginBottom: 1
		},

		button: {
			fontWeight: 700
		}
	},

	palette: {
		primary: {
			main: '#0b7778'
		},
		secondary: {
			main: '#EAFCF9'
		}
	},

	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					color: '#fff',
					boxShadow: 'none',
					textTransform: 'none',

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
