import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	typography: {
		fontFamily: "'Poppins', 'sans-serif'",
		h1: {
			textTransform: 'uppercase',
			fontSize: '3rem',
			fontWeight: 700
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
