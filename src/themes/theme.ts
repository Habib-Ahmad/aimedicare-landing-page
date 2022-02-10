import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	typography: {
		fontFamily: "'Poppins', 'sans-serif'",
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
			}
		}
	}
});
