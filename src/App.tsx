import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/theme';
import NavBar from './components/NavBar/NavBar';

const App = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
		</ThemeProvider>
	);
};

export default App;
